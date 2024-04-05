import CreateWorkoutFormCSS from './CreateWorkoutForm.module.css';
import ExerciseCard from "../../ExerciseCard/ExerciseCard";
import { useExerciseContext } from '../../../contexts/exerciseProvider';


export default function CreateWorkoutForm() : JSX.Element {
    const { currentExerciseArray } = useExerciseContext();
 
    return (
        <form className={CreateWorkoutFormCSS.componentBody}>
            <h2>Create Workout</h2>
            <input type="text" placeholder='workout name'/>

            <section className={CreateWorkoutFormCSS.cardContainer}>
                {currentExerciseArray.map((exercise, index) => (
                    <ExerciseCard key={exercise.EXERCISE_INFO_ID} index={index}/>
                ))}
            </section>

            <input type="submit" value="Create"/>
        </form>
    );
}
