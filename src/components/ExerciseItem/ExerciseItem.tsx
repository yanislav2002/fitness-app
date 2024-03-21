import ExerciseItemCSS from './ExerciseItem.module.css';
import { Exercise } from '../../interfaces/Exercise';


export default function ExerciseItem(props: Exercise):JSX.Element {

    return (
        <div className={ExerciseItemCSS.componentBody}>
            <div>
                <p className={ExerciseItemCSS.exerciseName}>{props.EXERCISE_NAME}</p>
                <p className={ExerciseItemCSS.exerciseMuscleGroup}>{props.MUSCLE_NAME}</p>
                <p className={ExerciseItemCSS.exerciseMuscleGroup}>{props.CATEGORY_NAME}</p>
            </div>
            
            <a href="#"><img src={require('../../icons/add-icon2.png')} className={ExerciseItemCSS.addExercise}/></a>
        </div>
    );
}