import ExerciseItemCSS from './ExerciseItem.module.css';
import { Exercise } from '../../interfaces/Exercise';
import { useExerciseContext } from '../../contexts/exerciseProvider';

const ExerciseItem: React.FC<Exercise> = ({ ...props }) => {
    const { handleAddExercise } = useExerciseContext();

    const handleClick = (e: any) => {
        e.preventDefault();

        handleAddExercise(props);
    };

    return (
        <div className={ExerciseItemCSS.componentBody}>
            <div>
                <p className={ExerciseItemCSS.exerciseName}>{props.EXERCISE_NAME}</p>
                <p className={ExerciseItemCSS.exerciseMuscleGroup}>{props.MUSCLE_NAME}</p>
                <p className={ExerciseItemCSS.exerciseMuscleGroup}>{props.CATEGORY_NAME}</p>
            </div>
            
            <a href="#" onClick={handleClick}>
                <img src={require('../../icons/add-icon2.png')} className={ExerciseItemCSS.addExercise} />
            </a>
        </div>
    );
}

export default ExerciseItem;
