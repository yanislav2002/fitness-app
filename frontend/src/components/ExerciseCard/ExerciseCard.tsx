import React, { useEffect, useState } from 'react';
import ExerciseCardCSS from './ExerciseCard.module.css';
import { useExerciseContext } from '../../contexts/exerciseProvider';
import { Exercise } from '../../interfaces/Exercise';

interface ExerciseCardProps {
    index: number;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ index }) => {
    const { exercises, currentExerciseArray, setCurrentExerciseArray } = useExerciseContext();

    const [newExercise, setNewExercise] = useState<Exercise>({
        ID: 0,
        EXERCISE_NAME: '',
        IMAGE: '',
        DESCRIPTION: '',
        MUSCLE_NAME: '',
        CATEGORY_NAME: '',
    });

    const exercise = currentExerciseArray[index]; 
    
    const handleSetsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSets = Number(e.target.value);
        setCurrentExerciseArray(prevArray => {
            const newArray = [...prevArray];
            newArray[index] = { ...newArray[index], SETS: newSets };
            return newArray;
        });
    };

    const handleRepsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newReps = Number(e.target.value);
        setCurrentExerciseArray(prevArray => {
            const newArray = [...prevArray];
            newArray[index] = { ...newArray[index], REPS: newReps };
            return newArray;
        });
    };

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newWeight = Number(e.target.value);
        setCurrentExerciseArray(prevArray => {
            const newArray = [...prevArray];
            newArray[index] = { ...newArray[index], WEIGTH: newWeight };
            return newArray;
        });
    };

    useEffect(()=> {
        setNewExercise(exercises.find(ex => ex.ID === exercise.EXERCISE_INFO_ID)!)
    }, [exercise]);
    
    return (
        <section className={ExerciseCardCSS.componentBody}>
            <p>{index + 1}</p>
            <img src={newExercise.IMAGE} alt={newExercise.EXERCISE_NAME} />

            <div className={ExerciseCardCSS.exerciseInfo}>

                <div>
                    <p className={ExerciseCardCSS.exerciseName}>{newExercise.EXERCISE_NAME}</p>
                    <p className={ExerciseCardCSS.exerciseMuscleGroup}>{newExercise.MUSCLE_NAME}</p>
                </div>

                <div className={ExerciseCardCSS.exerciseSets}>
                    <input type="number" value={exercise.SETS !== 0 ? exercise.SETS : ''} onChange={handleSetsChange} />
                    <p>sets</p>
                    <input type="number" value={exercise.REPS !== 0 ? exercise.REPS : ''} onChange={handleRepsChange} />
                    <p>reps</p>
                    <input type="number" value={exercise.WEIGTH !== 0 ? exercise.WEIGTH : ''} onChange={handleWeightChange} />
                    <p>kg</p>
                </div>

            </div>
        </section>
    );
};

export default ExerciseCard;
