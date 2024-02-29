import './HomePage.css';
import SummaryPanel from '../../SummaryPanel/SummaryPanel';
import WorkoutSplits from '../../WorkoutSplits/WorkoutSplits';


export default function HomePage(): JSX.Element {
    return(
        <div className="home-page">
            <SummaryPanel />

            <WorkoutSplits />
        </div>
    );
}