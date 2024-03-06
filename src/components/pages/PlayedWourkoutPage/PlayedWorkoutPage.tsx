import './PlayedWorkoutPage.css';
import PlayedExercise from '../../PlayedExercise/PlayedExercise';


export default function PlayedWorkoutPage(): JSX.Element {
    return(
        <div className='played-workout-page'>
            <PlayedExercise />
            <PlayedExercise />
            <input type="submit" value="Finish Workout" />
        </div>
    );
}