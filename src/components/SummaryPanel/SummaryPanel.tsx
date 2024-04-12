import { Link } from 'react-router-dom';
import SummaryPanelCSS from './SummaryPanel.module.css';
import PATHS from '../../paths';


export default function SummaryPanel(): JSX.Element {
    return(
        <section className={SummaryPanelCSS.componentBody}>

            <div className={SummaryPanelCSS.backgroundPhoto}></div>
            
            <h1>Create Workout Plan</h1>

            <p>Transform your body with expert guidance. Join our fitness community today for personalized workouts and nutrition plans!
            </p>

            <p><Link to={PATHS.createWorkout} className='link'>Create Workout</Link></p>
            
          
        </section>  
    )
}