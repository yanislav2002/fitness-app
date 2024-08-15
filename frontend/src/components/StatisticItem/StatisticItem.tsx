import axios from 'axios';
import StatisticItemCSS from './StatisticItem.module.css';


export default function StatisticItem({...st}): JSX.Element {
    const newDate = st.DATE_EX.slice(0,10);
    const newTime = st.TIME_EX.slice(14,19);

    const clickHandler = async (e:any) => {
        e.preventDefault();

        try {
            
            const response = await axios.delete('http://localhost:9009/profile-page/statistics', {
                params: {
                  id: st.ID
                }
            });

            console.log(response);
            

            console.log('Delete request successful');
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    }

    return(
        <div className={StatisticItemCSS.componentBody}>

            <h4>{st.PLAN_NAME}</h4>

            <div>
                <p>Date</p>
                <p>{newDate}</p>
            </div>

            <div>
                <p>Time</p>
                <p>{newTime}</p>
            </div>

            <div>
                <p>Exercises</p>
                <p>{st.NUMBER_OF_EXERCISES}</p>
            </div>


            <a href="#" onClick={clickHandler}><img src={require('../../icons/delete.png')}/></a>

        </div>
    );
}