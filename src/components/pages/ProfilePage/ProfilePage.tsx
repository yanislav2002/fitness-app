import ProfilePageCSS from './ProfilePage.module.css';
import ProfileInfo from '../../ProfileInfo/ProfileInfo';
import PlanItem from '../../PlanItem/PlanItem';
import StatisticItem from '../../StatisticItem/StatisticItem';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/authProvider';
import { Plan } from '../../../interfaces/Plan';
import axios from 'axios';


export default function ProfilePage():JSX.Element {
    const { userId } = useContext(AuthContext);

    const [plans, setPlans] = useState<Plan[]>([]);
    const [statistics, setStatistics] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:9009/profile-page`, {
            params: {
                userId: userId
            }
        });
            const plansRes = response.data.plans;
            const statisticsRes = response.data.statistics;            
            const userInfoRes = response.data.userInfo; 

            setUserInfo(userInfoRes)
            setStatistics(statisticsRes)
            setPlans(plansRes);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return(
        <>
            <ProfileInfo {...userInfo}/>

            <section className={ProfilePageCSS.userItems}>
                
                <section className={ProfilePageCSS.itemSection}>

                    <h2>My plans</h2>

                    <div className={ProfilePageCSS.itemList}>
                        {plans && plans.map(plan => (
                            <PlanItem key={plan.ID} {...plan}/> 
                        ))}
                    </div>

                </section>

                <section className={ProfilePageCSS.itemSection}>

                    <h2>History</h2>

                    <div className={ProfilePageCSS.itemList}>
                        {statistics && statistics.map((st: any) => (
                            <StatisticItem key={st.ID} {...st}/> 
                        ))}
                    </div>

                </section>

            </section>
        </>
    );
}