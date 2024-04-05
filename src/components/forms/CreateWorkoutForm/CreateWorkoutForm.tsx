import CreateWorkoutFormCSS from './CreateWorkoutForm.module.css';
import ExerciseCard from "../../ExerciseCard/ExerciseCard";
import { useExerciseContext } from '../../../contexts/exerciseProvider';
import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/authProvider';
import { CurrentExercise } from '../../../interfaces/CurrentExercise';


export default function CreateWorkoutForm() : JSX.Element {
    const { currentExerciseArray, setCurrentExerciseArray, planName, setPlanName, submitHandler } = useExerciseContext();
    const { userId } = useContext(AuthContext);

    const [ areFieldsEmpty, setAreFieldsEmpty ] = useState(true);

    const [ errorMessage, setErrorMessage ] = useState<string>('');

    const handlePlanName = (event: any) => {
        setPlanName(event.target.value);
    };

    useEffect(() => {
        currentExerciseArray.forEach((currEx: CurrentExercise) => {
            console.log(currEx.REPS != 0 && currEx.SETS != 0);

            if(currEx.REPS != 0 && currEx.SETS != 0) {
                setAreFieldsEmpty(false);
            } else {
                setAreFieldsEmpty(true);
            }
        })
    }, [currentExerciseArray])

    useEffect(()=>{
        setErrorMessage('');
    }, [planName]);


    const handleOnSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            submitHandler(userId);
            setPlanName('');
            setCurrentExerciseArray([]);
        } catch (error: any) {            
            if (!error?.response) {
                setErrorMessage('No server response.')
            } else if (error.response.status === 400) {
                setErrorMessage('Missing email or password.')
            } else if (error.response.status === 401) {
                setErrorMessage('Unauthorized.')
            } else {
                setErrorMessage('Login Failed.')
            }
        }   
    }
 
    return (
        <form className={CreateWorkoutFormCSS.componentBody} onSubmit={handleOnSubmit}>
            <h2>Create Workout</h2>

            <input type="text" placeholder='workout name' onChange={handlePlanName}/>

            <section className={CreateWorkoutFormCSS.cardContainer}>
                {currentExerciseArray.map((exercise, index) => (
                    <ExerciseCard key={exercise.EXERCISE_INFO_ID} index={index}/>
                ))}
            </section>

            <button disabled={!planName && areFieldsEmpty ? true : false}>Create</button>   

        </form>
    );
}
