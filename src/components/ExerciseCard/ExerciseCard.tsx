import ExerciseCardCSS from './ExerciseCard.module.css';


export default function ExerciseCard(): JSX.Element {
    return(
        <section className={ExerciseCardCSS.componentBody}>
            <p>1.</p>
            <img src="https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg" />

            <div className={ExerciseCardCSS.exerciseInfo}>
                <div> 
                    <p className={ExerciseCardCSS.exerciseName}>Bench Press</p>
                    <p className={ExerciseCardCSS.exerciseMuscleGroup}>Chest</p>
                </div>

                <div className={ExerciseCardCSS.exerciseSets}>
                    <input type="number" />
                    <p>sets</p>
                    <input type="number" />
                    <p>reps</p>
                    <input type="number" />
                    <p>kg</p>
                </div>
            </div>
        </section>
    );
}