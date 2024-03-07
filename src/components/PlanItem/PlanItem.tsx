import PlanItemCSS from './PlanItem.module.css';


export default function PlanItem(): JSX.Element {
    return(
        <div className={PlanItemCSS.componentBody}>

            <div className={PlanItemCSS.playExerciseContainer}>
                <a href="#" ><img src={require('../../icons/play.png')} /></a>
            </div>

            <h3>Push</h3>

            <a href="#"><img src={require('../../icons/three-dots.png')} className='three-dots' /></a>

        </div>
    );
} 