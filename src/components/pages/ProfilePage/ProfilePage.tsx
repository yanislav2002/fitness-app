import ProfilePageCSS from './ProfilePage.module.css';
import ProfileInfo from '../../ProfileInfo/ProfileInfo';
import PlanItem from '../../PlanItem/PlanItem';
import StatisticItem from '../../StatisticItem/StatisticItem';


export default function ProfilePage():JSX.Element {
    return(
        <>
            <ProfileInfo />

            <section className={ProfilePageCSS.userItems}>
                
                <section className={ProfilePageCSS.itemSection}>

                    <h2>My plans</h2>

                    <div className={ProfilePageCSS.itemList}>
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

                </section>

                <section className={ProfilePageCSS.itemSection}>

                    <h2>History</h2>

                    <div className={ProfilePageCSS.itemList}>
                        <StatisticItem />
                        <StatisticItem />
                        <StatisticItem />
                    </div>

                </section>

            </section>
        </>
    );
}