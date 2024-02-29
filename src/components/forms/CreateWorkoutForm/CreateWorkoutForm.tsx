import '../Form.css';
import './CreateWorkoutForm.css';
import ExerciseCard from "../../ExerciseCard/ExerciseCard";


export default function CreateWorkoutForm():JSX.Element {
    return(
        <form>
            <h2>Ceate Workout</h2>
            <input type="text" placeholder='workout name'/>

            <section className='card-container'>
                <ExerciseCard />
                <ExerciseCard />
                <ExerciseCard />
            </section>
        </form>
    );
}