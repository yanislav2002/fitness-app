import CreateWorkoutFormCSS from './CreateWorkoutForm.module.css';

import ExerciseCard from "../../ExerciseCard/ExerciseCard";


export default function CreateWorkoutForm() :JSX.Element {
    return(
        <form className={CreateWorkoutFormCSS.componentBody}>
            <h2>Ceate Workout</h2>
            <input type="text" placeholder='workout name'/>

            <section className={CreateWorkoutFormCSS.cardContainer}>
                <ExerciseCard />
                <ExerciseCard />
            </section>

            <input type="submit" value="Create"/>
        </form>
    );
}