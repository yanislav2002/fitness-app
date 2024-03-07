import ActiveSetCSS from './ActiveSet.module.css';


export default function ActiveSet(): JSX.Element {
    return(
        <div className={ActiveSetCSS.componentBody}>
            <div className={ActiveSetCSS.setInfoContainer}>
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

            <div className={ActiveSetCSS.radioTileGroup}>

                <div className={ActiveSetCSS.inputContainer}>
                    <input type="radio" name="a" className={ActiveSetCSS.takeAway}/>
                    <div className={ActiveSetCSS.radioTile}>
                        <img src={require('../../icons/test2.png')} className={ActiveSetCSS.radioImg} />
                    </div>
                </div>

                <div className={ActiveSetCSS.inputContainer}>
                    <input type="radio" name="a" className={ActiveSetCSS.done}/>
                    <div className={ActiveSetCSS.radioTile}>
                        <img src={require('../../icons/test1.png')} className={ActiveSetCSS.radioImg} />
                    </div>
                </div>
                
            </div>
        </div>
    );
}