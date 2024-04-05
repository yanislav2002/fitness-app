import { ReactNode, useContext, useState, createContext, Dispatch, SetStateAction, useEffect } from "react";
import { Exercise } from "../interfaces/Exercise";
import { CurrentExercise } from "../interfaces/CurrentExercise";

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
    setSets: Dispatch<SetStateAction<number>>;
    setReps: Dispatch<SetStateAction<number>>;
    setWeight: Dispatch<SetStateAction<number>>;
    setExercise: Dispatch<SetStateAction<Exercise>>;
    setCurrentExercise: Dispatch<SetStateAction<CurrentExercise>>;
    setCurrentExerciseArray: Dispatch<SetStateAction<CurrentExercise[]>>;
    handleAddExercise: (exercise: Exercise) => void; 
}

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
                WEIGTH: weight,
            }))
        );
    }, [sets, reps, weight]);

    useEffect(() => {
        console.log(currentExerciseArray);
        
    }, [currentExerciseArray]);

    return (
        <ExerciseContext.Provider value={{ 
            exercise, 
            currentExercise, 
            sets,
            reps,
            weight,
            currentExerciseArray,
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
