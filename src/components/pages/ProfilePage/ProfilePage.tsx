import './ProfilePage.css';
import ProfileInfo from '../../ProfileInfo/ProfileInfo';
import PlanItem from '../../PlanItem/PlanItem';


export default function ProfilePage():JSX.Element {
    return(
        <div className="profile-page">
            <ProfileInfo />

            <section className='user-plans'>

                <div className="plans">
                    <PlanItem />
                    <PlanItem />
                    <PlanItem />
                    <PlanItem />
                    <PlanItem />
                    <PlanItem />
                    <PlanItem />
                </div>

                <div className="plans">
                    
                </div>

            </section>
        </div>
    );
}