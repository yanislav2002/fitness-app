import WorkoutSplitsCSS from './WorkoutSplits.module.css';


export default function WorkoutSplits():JSX.Element {
    return(
        <div className={WorkoutSplitsCSS.componentBody}>
            <h2><b>Best Workout Splits</b></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis optio quas quis a consectetur voluptatibus cupiditat
                e neque? Consectetur provident tempora numquam in unde accusantium assumenda optio aspernatur, consequuntur sapiente.
            </p>
            <section className={WorkoutSplitsCSS.articleSection}>
                <article>
                    <h4>Push Pull Legs</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus qui aspernatur officiis dolorem deleniti repellendus voluptatibus 
                        rerum? 
                    </p>
                </article>
                <article>
                    <h4>Full Body</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus qui aspernatur officiis dolorem deleniti repellendus voluptatibus 
                        rerum? 
                    </p>
                </article>
                <article>
                    <h4>Upper Lower</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus qui aspernatur officiis dolorem deleniti repellendus voluptatibus 
                        rerum? 
                    </p>
                </article>
            </section>
        </div>
    );
}