import AddExerciseCSS from './AddExercise.module.css';

import Filter from '../Filter/Filter';
import ExerciseItem from '../ExerciseItem/ExerciseItem';


export default function AddExercise():JSX.Element {
    return(
        <aside> 
            <Filter />
 
            <section className={AddExerciseCSS.exerciseList}>
                <ExerciseItem />
                <ExerciseItem />
                <ExerciseItem />
                <ExerciseItem />
                <ExerciseItem />
                <ExerciseItem />
                <ExerciseItem />
                <ExerciseItem />
                <ExerciseItem />
                <ExerciseItem />
                <ExerciseItem />
                <ExerciseItem />
                <ExerciseItem />
                
            </section>
        </aside>
    );
}