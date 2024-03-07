import CreateWorkoutPageCSS from './CreateWorkoutPage.module.css';

import CreateWorkoutForm from '../../forms/CreateWorkoutForm/CreateWorkoutForm';
import AddExercise from '../../AddExercise/AddExercise';


export default function CreateWorkoutPage(): JSX.Element {
    return(
        <div className={CreateWorkoutPageCSS.pageBody}>

            <CreateWorkoutForm />

            <AddExercise />
            
        </div>
    );
}
