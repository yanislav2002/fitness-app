import AddExerciseCSS from './AddExercise.module.css';

import Filter from '../Filter/Filter';
import ExerciseItem from '../ExerciseItem/ExerciseItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Exercise } from '../../interfaces/Exercise';
// import { Category } from '../../interfaces/Category';
// import { MuscleGroup } from '../../interfaces/MuscleGroup';


export default function AddExercise():JSX.Element {
    const [exercises, setExercises] = useState<Exercise[]>([]);

    useEffect(() => {
        const fetchAllExercises = async () => {
            try {
                const res = await axios.get('http://localhost:9009/create-workout');
                
                setExercises(res.data);
            } catch(error){
                console.log(error);
            }
        };

        fetchAllExercises();
    }, []);

    return(
        <aside> 
            <Filter/>
 
            <section className={AddExerciseCSS.exerciseList}>
                {exercises.map((exercise: Exercise) => (
                    <ExerciseItem key={exercise.ID} {...exercise}/>
                ))}
            </section>

        </aside>
    );
}