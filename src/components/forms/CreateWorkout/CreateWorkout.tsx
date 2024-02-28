import '../Form.css'
import './CreateWorkout.css'


export default function CreateWorkout(): JSX.Element {
    return(
        <div className='create-workout-page'>
            <form>
                <h2>Ceate Workout</h2>
                <input type="text" placeholder='workout name'/>

                <section className='exercise-card'>
                    <p>1.</p>
                    <img src="https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg" alt="" />

                    <section className='exercise-rigth-side'>
                        <section>
                            <p className='exercise-name'>Bench Press</p>
                            <p className='exercise-muscle-group'>Chest</p>
                        </section>

                        <section className='exercise-info'>
                            <input type="number" />
                            <p>sets</p>
                            <input type="number" />
                            <p>reps</p>
                            <input type="number" />
                            <p>kg</p>
                        </section>
                    </section>
                </section>

                <section className='exercise-card'>
                    <p>1.</p>
                    <img src="https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg" alt="" />

                    <section className='exercise-rigth-side'>
                        <section>
                            <p className='exercise-name'>Bench Press</p>
                            <p className='exercise-muscle-group'>Chest</p>
                        </section>

                        <section className='exercise-info'>
                            <input type="number" />
                            <p>sets</p>
                            <input type="number" />
                            <p>reps</p>
                            <input type="number" />
                            <p>kg</p>
                        </section>
                    </section>
                </section>

                <section className='exercise-card'>
                    <p>1.</p>
                    <img src="https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg" alt="" />

                    <section className='exercise-rigth-side'>
                        <section>
                            <p className='exercise-name'>Bench Press</p>
                            <p className='exercise-muscle-group'>Chest</p>
                        </section>

                        <section className='exercise-info'>
                            <input type="number" />
                            <p>sets</p>
                            <input type="number" />
                            <p>reps</p>
                            <input type="number" />
                            <p>kg</p>
                        </section>
                    </section>
                </section>



            </form>

            <aside>
                <section className='add-exercise'>
                    <section className='selects'>
                        <select value='muscle group'>
                            <option value="triceps">triceps</option>
                            <option value="biceps">biceps</option>
                            <option value="shoulders">shoulders</option>
                            <option value="chest">chest</option>
                        </select>

                        <select value='category'>
                            <option value="dumbbell">dumbbell</option>
                            <option value="cable">cable</option>
                            <option value="bodyweigth">bodyweigth</option>
                        </select>
                    </section>

                    <input type="text" placeholder='exercise name'/>

                </section>
            </aside>
        </div>
    );
}
