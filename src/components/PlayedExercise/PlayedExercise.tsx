import PlayedExerciseCSS from './PlayedExercise.module.css';
import ActiveSet from '../ActiveSet/ActiveSet';


export default function PlayedExercise(): JSX.Element {
    return(
        <div className={PlayedExerciseCSS.componentBody}>
            <div><img src='https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg'/></div>
            
            <h3>Barbell Bench Press</h3>
            
            <section className={PlayedExerciseCSS.setsList}>
                <ActiveSet />
                <ActiveSet />
                <ActiveSet />
                <ActiveSet />
            </section>
        </div> 
    )
}