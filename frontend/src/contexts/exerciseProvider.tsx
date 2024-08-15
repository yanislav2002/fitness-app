import { ReactNode, useState, createContext, Dispatch, SetStateAction, useEffect, useContext } from "react";
import { Exercise } from "../interfaces/Exercise";
import { CurrentExercise } from "../interfaces/CurrentExercise";
import axios from 'axios';
import { Category } from "../interfaces/Category";
import { MuscleGroup } from "../interfaces/MuscleGroup";
import PATHS from "../paths";
import { useNavigate } from "react-router";

interface ExerciseProviderProps {
    children: ReactNode;
}

interface ExerciseContextType {
    exercise: Exercise;
    currentExercise: CurrentExercise;
    sets: number;
    reps: number;
    weight: number;
    currentExerciseArray: CurrentExercise[];
    exercises: Exercise[];
    category: Category[];
    muscleGroup: MuscleGroup[];
    planName: string;
    submitHandler: (userId: string) => void; 
    setPlanName: Dispatch<SetStateAction<string>>; 
    setSets: Dispatch<SetStateAction<number>>;
    setReps: Dispatch<SetStateAction<number>>;
    setWeight: Dispatch<SetStateAction<number>>;
    setExercise: Dispatch<SetStateAction<Exercise>>;
    setCurrentExercise: Dispatch<SetStateAction<CurrentExercise>>;
    setCurrentExerciseArray: Dispatch<SetStateAction<CurrentExercise[]>>;
    handleAddExercise: (exercise: Exercise) => void; 
}

const CREATE_WORKOUT_PLAN_URL = 'http://localhost:9009/create-workout/plan';
const CREATE_WORKOUT_CURRENT_EXERCISE_URL = 'http://localhost:9009/create-workout/current-exercise';

const ExerciseContext = createContext<ExerciseContextType | undefined>(undefined);

export const useExerciseContext = () => {
    const context = useContext(ExerciseContext);
    if (!context) {
        throw new Error('useExerciseContext must be used within an ExerciseProvider');
    }
    return context;
};

export const ExerciseProvider: React.FC<ExerciseProviderProps> = ({ children }) => {
    const [currentExerciseArray, setCurrentExerciseArray] = useState<CurrentExercise[]>([]);

    const [exercise, setExercise] = useState<Exercise>({
        ID: 0,
        EXERCISE_NAME: '',
        IMAGE: '',
        DESCRIPTION: '',
        MUSCLE_NAME: '',
        CATEGORY_NAME: '',
    });

    const [currentExercise, setCurrentExercise] = useState<CurrentExercise>({
        SETS: 0,
        REPS: 0,
        WEIGTH: 0,
        EXERCISE_INFO_ID: 0, 
    });

    const [sets, setSets] = useState<number>(0);
    const [reps, setReps] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);

    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [category, setCategory] = useState<Category[]>([]);
    const [muscleGroup, setMuscleGroup] = useState<MuscleGroup[]>([]);

    const [planName, setPlanName] = useState('');

    const navigate = useNavigate();

    const submitHandler = async (userId: string) => {
        const planResult = await axios.post(
            CREATE_WORKOUT_PLAN_URL,
            { planName, userId },
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            }
        );

        const response = await axios.get(CREATE_WORKOUT_PLAN_URL);
        const plans = response.data;
        const plan = plans.find((p: any) => p.PLAN_NAME === planName);

        const planId = plan.ID;
        
        const CurrExResult = await axios.post(
            CREATE_WORKOUT_CURRENT_EXERCISE_URL,
            { planId, currentExerciseArray },
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            }
        );

        navigate(PATHS.home);
    }

    useEffect(() => {
        const fetchAllExercises = async () => {
            try {
                const res = await axios.get('http://localhost:9009/create-workout');

                setExercises(res.data.exercises);
                setCategory(res.data.category);
                setMuscleGroup(res.data.muscleGroup);
            } catch (error) {
                console.log(error);
            } 
        };

        fetchAllExercises();
    }, []);

    const handleAddExercise = (ex: Exercise) => {
        if (!currentExerciseArray.some(item => item.EXERCISE_INFO_ID === ex.ID)) {
            setExercise(ex);

            setCurrentExerciseArray(prevArray => [...prevArray, {
                SETS: 0,
                REPS: 0,
                WEIGTH: 0,
                EXERCISE_INFO_ID: ex.ID,
            }])
            
        } else {
            console.log("Exercise with the same ID already exists.");
        }
    };
    
    useEffect(() => {
        setCurrentExerciseArray(prevArray =>
            prevArray.map(item => ({
                ...item,
                SETS: sets,
                REPS: reps,
                WEIGHT: weight,
            }))
        );
    }, [sets, reps, weight]);

    return (
        <ExerciseContext.Provider value={{ 
            exercise, 
            currentExercise, 
            sets,
            reps,
            weight,
            currentExerciseArray,
            exercises,
            category,
            muscleGroup,
            planName,
            submitHandler,
            setPlanName,
            setSets, 
            setReps,
            setWeight,
            setExercise,
            setCurrentExercise,
            setCurrentExerciseArray,
            handleAddExercise
        }}>
            {children}
        </ExerciseContext.Provider>
    );
};
