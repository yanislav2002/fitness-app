import SummaryPanel from '../../SummaryPanel/SummaryPanel';
import WorkoutSplits from '../../WorkoutSplits/WorkoutSplits';


export default function HomePage(): JSX.Element {
    return(
        <>
            <SummaryPanel />
            <WorkoutSplits />
        </>
    );
}