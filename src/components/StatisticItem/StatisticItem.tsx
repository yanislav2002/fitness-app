import StatisticItemCSS from './StatisticItem.module.css';


export default function StatisticItem(): JSX.Element {
    return(
        <div className={StatisticItemCSS.componentBody}>

             <h4>Fullbody</h4>

             <div>
                <p>Date</p>
                <p>12-04-2024</p>
             </div>

             <div>
                <p>Time</p>
                <p>56:43</p>
             </div>

            <a href="#"><img src={require('../../icons/three-dots.png')} className='three-dots' /></a>

        </div>
    );
}