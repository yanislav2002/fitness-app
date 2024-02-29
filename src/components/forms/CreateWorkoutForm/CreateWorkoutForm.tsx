import '../Form.css';
import './CreateWorkoutForm.css';
import ExerciseCard from "../../ExerciseCard/ExerciseCard";


export default function CreateWorkoutForm():JSX.Element {
    return(
        <form className='create-workout-form'>
            <h2>Ceate Workout</h2>
            <input type="text" placeholder='workout name'/>

            <section className='card-container'>
                <ExerciseCard />
                <ExerciseCard />
            </section>

            <input type="submit" value="Create"/>
        </form>
    );
}