import './ExerciseCard.css'


export default function ExerciseCard(): JSX.Element {
    return(
        <section className='exercise-card'>
            <p>1.</p>
            <img src="https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg" />

            <div className='exercise-info'>
                <div>
                    <p className='exercise-name'>Bench Press</p>
                    <p className='exercise-muscle-group'>Chest</p>
                </div>

                <div className='exercise-sets'>
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