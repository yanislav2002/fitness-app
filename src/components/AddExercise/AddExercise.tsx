import './AddExercise.css';
import Filter from '../Filter/Fiilter';
import ExerciseItem from '../ExerciseItem/ExerciseItem';


export default function AddExercise():JSX.Element {
    return(
        <aside> 
            <Filter />

            <section className='exercise-list'>
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