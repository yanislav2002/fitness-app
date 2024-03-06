import './ActiveSet.css';


export default function ActiveSet(): JSX.Element {
    return(
        <div className='active-set'>
            <div className="set-info-container">
                <h5>1.</h5>

                <div>
                    <h5>10</h5>
                    <h5>Reps</h5>
                </div>

                <div>
                    <h5>45</h5>
                    <h5>Kg</h5>
                </div>
            </div>

            <div className='radio-tile-group'>
                <div className='input-container'>
                    <input type="radio" name="a" className='take-away'/>
                    <div className="radio-tile">
                        <img src={require('../../icons/test2.png')} className='radio-img' />
                    </div>
                </div>

                <div className='input-container'>
                    <input type="radio" name="a" className='done'/>
                    <div className="radio-tile">
                        <img src={require('../../icons/test1.png')} className='radio-img' />
                    </div>
                </div>
            </div>
        </div>
    );
}