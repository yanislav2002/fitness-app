import { Link } from 'react-router-dom';
import PlanItemCSS from './PlanItem.module.css';
import PATHS from '../../paths';
import axios from 'axios';


export default function PlanItem({...plan}): JSX.Element {

    const clickHandler = async (e: any) => {
        e.preventDefault();

        try {
            
            const response = await axios.delete('http://localhost:9009/profile-page/plans', {
                params: {
                  id: plan.ID
                }
            });

            console.log(response);
            

            console.log('Delete request successful');
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    }

    return(
        <div className={PlanItemCSS.componentBody}>

            <div className={PlanItemCSS.playExerciseContainer}>
                <Link to={`${PATHS.playedWorkout}/${plan.ID}`} className='form-link'>
                    <img src={require('../../icons/play.png')}/>
                </Link>
            </div>

            <div className={PlanItemCSS.innerContainer}>
                <h3>{plan.PLAN_NAME}</h3>

                <a href="#" onClick={clickHandler}><img src={require('../../icons/delete.png')}/></a>
            </div>

        </div>
    );
} 