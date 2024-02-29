import './CreateWorkoutPage.css';
import CreateWorkoutForm from '../../forms/CreateWorkoutForm/CreateWorkoutForm';
import AddExercise from '../../AddExercise/AddExercise';


export default function CreateWorkoutPage(): JSX.Element {
    return(
        <div className='create-workout-page'>

            <CreateWorkoutForm />

            <AddExercise />
            
        </div>
    );
}
