import PlayedExerciseCSS from './PlayedExercise.module.css';
import ActiveSet from '../ActiveSet/ActiveSet';


export default function PlayedExercise({...ex}): JSX.Element {
    const setsCount = ex.SETS || 0;


    return(
        <div className={PlayedExerciseCSS.componentBody}>
            <div><img src={ex.IMAGE}/></div>
            
            <h3>{ex.EXERCISE_NAME}</h3>
            
            <section className={PlayedExerciseCSS.setsList}>
                {Array.from({ length: setsCount }).map((_, index) => (
                    <ActiveSet key={index} index={index} ex={ex} />
                ))}
            </section> 
        </div> 
    )
}