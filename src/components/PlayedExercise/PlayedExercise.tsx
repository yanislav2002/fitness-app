import './PlayedExercise.css';
import ActiveSet from '../ActiveSet/ActiveSet';


export default function PlayedExercise(): JSX.Element {
    return(
        <div className='played-exercise'>
            <div><img src='https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg' alt="" /></div>
            <h3>Barbell Bench Press</h3>
            
            <section className='sets-list'>
                <ActiveSet />
                <ActiveSet />
                <ActiveSet />
                <ActiveSet />

            </section>
        </div>
    )
}