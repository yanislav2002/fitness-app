import PlayedWorkoutPageCSS from './PlayedWorkoutPage.module.css';
import PlayedExercise from '../../PlayedExercise/PlayedExercise';


export default function PlayedWorkoutPage(): JSX.Element {
    return(
        <div className={PlayedWorkoutPageCSS.pageBody}>
            <PlayedExercise />
            <PlayedExercise />
            <input type="submit" value="Finish Workout" />
        </div>
    );
}