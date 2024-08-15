import PlayedWorkoutPageCSS from './PlayedWorkoutPage.module.css';
import PlayedExercise from '../../PlayedExercise/PlayedExercise';
import { useNavigate, useParams } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../../contexts/authProvider';
import PATHS from '../../../paths';


export default function PlayedWorkoutPage(): JSX.Element {
    const { id } = useParams<{ id: string }>();
    const { userId } = useContext(AuthContext);

    const [exercises, setExercises] = useState<any[]>([]);
    const [timer, setTimer] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000); 

        return () => clearInterval(interval); 
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:9009/played-workout`, {
                params: {
                    id: id
                }
            });
            const exercises = response.data;
            setExercises(exercises);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleSubmit = async  (event: any) => {
        event.preventDefault();

        let currentDate = new Date();

        let day = currentDate.getDate(); 
        let month = currentDate.getMonth() + 1; 
        let year = currentDate.getFullYear() % 100; 

        let monthsAbbreviations = [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
        ];
        let formattedYear = year < 10 ? '0' + year : year.toString();
        let formattedMonthAbbrev = monthsAbbreviations[month - 1]; 
        let formattedDate = `${day}-${formattedMonthAbbrev}-${formattedYear}`;

        const numberOfExercises = exercises.length;
        const formatTimer = formatTime(timer);
        const planName = exercises[0].PLAN_NAME;

        const result = await axios.post(
            `http://localhost:9009/played-workout`,
            { timer: formatTimer, numberOfExercises, formattedDate, userId, planName },
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            }
        );

        console.log(result);

        navigate(PATHS.profile)
    };

    return (
        <div className={PlayedWorkoutPageCSS.pageBody}>
            {exercises.map((ex: any, index: number) => (
                <PlayedExercise key={ex.ID} {...ex} />
            ))}
            <div>Timer: {formatTimeVisual(timer)}</div>
            <input type="submit" value="Finish Workout" onClick={handleSubmit} />
        </div>
    );
}

const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    const milliseconds = Math.floor((time - Math.floor(time)) * 100); 
    return `11-MAY-11 ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds)}`;
};

const formatTimeVisual = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
};

    const padZero = (num: number): string => {
    return num < 10 ? '0' + num : num.toString();
};
