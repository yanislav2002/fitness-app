import WorkoutSplitsCSS from './WorkoutSplits.module.css';


export default function WorkoutSplits():JSX.Element {
    return(
        <div className={WorkoutSplitsCSS.componentBody}>
            <h2><b>Best Workout Splits</b></h2>
            <p>Discover the best workout splits for maximum gains! From classic full-body routines to targeted muscle group sessions, find the perfect plan to optimize your fitness journey. Whether you're a beginner or seasoned gym-goer, we've got you covered with expert advice and proven strategies. Elevate your workouts and crush your goals today!
            </p>
            <section className={WorkoutSplitsCSS.articleSection}>
                <article>
                    <h4>Push Pull Legs</h4>
                    <img src="https://steelsupplements.com/cdn/shop/articles/shutterstock_1454693165_1000x.jpg?v=1631031832" className={WorkoutSplitsCSS.image}/>
                    <p>Unlock your potential with Push Pull Legs training. Optimize muscle growth and strength with this effective split routine.
                    </p>
                </article>
                <article>
                    <h4>Full Body</h4>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/woman-lifting-barbell-in-gym-royalty-free-image-1705594740-65a987f5a571b.png" className={WorkoutSplitsCSS.image}/>
                    <p>Revolutionize your fitness with full body workouts. Maximize gains and efficiency with comprehensive training sessions.
                    </p>
                </article>
                <article>
                    <h4>Upper Lower</h4>
                    <img src="https://caliberstrong.com/wp-content/uploads/2020/04/how-to-bench-press.jpg" className={WorkoutSplitsCSS.image}/>
                    <p>Elevate your training with upper-lower split routines. Balance strength and muscle development for total body transformation.
                    </p>
                </article>
            </section>
        </div>
    );
}