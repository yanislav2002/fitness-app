import './ProfilePage.css';
import ProfileInfo from '../../ProfileInfo/ProfileInfo';
import PlanItem from '../../PlanItem/PlanItem';
import StatisticItem from '../../StatisticItem/StatisticItem';


export default function ProfilePage():JSX.Element {
    return(
        <div className="profile-page">
            <ProfileInfo />

            <section className='user-plans'>
                
                <div className='plan-container'>

                    <h2>My plans</h2>
                    <div className="plan-list">
                        <PlanItem />
                        <PlanItem />
                        <PlanItem />
                        <PlanItem />
                        <PlanItem />
                        <PlanItem />
                        <PlanItem />
                        <PlanItem />
                        <PlanItem />
                    </div>
                </div>

                <div className='plan-container'>

                    <h2>History</h2>
                    <div className="plan-list">
                        <StatisticItem />
                        <StatisticItem />
                        <StatisticItem />
                    </div>
                </div>

            </section>
        </div>
    );
}