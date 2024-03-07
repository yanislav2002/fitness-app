import ExerciseItemCSS from './ExerciseItem.module.css';


export default function ExerciseItem():JSX.Element {
    return (
        <div className={ExerciseItemCSS.componentBody}>
            <div>
                <p className={ExerciseItemCSS.exerciseName}>Bench Press</p>
                <p className={ExerciseItemCSS.exerciseMuscleGroup}>Chest</p>
                <p className={ExerciseItemCSS.exerciseMuscleGroup}>Barbell</p>
            </div>
            
            <a href="#"><img src={require('../../icons/add-icon2.png')} className={ExerciseItemCSS.addExercise} /></a>
        </div>
    );
}