import './PlanItem.css';


export default function PlanItem(): JSX.Element {
    return(
        <div className="plan-item">
            <div className='play-link-container'>
                <a href="#" ><img src={require('../../icons/play.png')} /></a>
            </div>
            <h3>Push</h3>
            <a href="#"><img src={require('../../icons/three-dots.png')} className='three-dots' /></a>
        </div>
    );
}