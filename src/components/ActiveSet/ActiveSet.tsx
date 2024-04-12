import ActiveSetCSS from './ActiveSet.module.css';


export default function ActiveSet({ index, ex }: { index: number; ex: any }): JSX.Element {
    const groupName = `group-${index}-${ex.ID}`; // Unique name for each group based on index

    return(
        <div className={ActiveSetCSS.componentBody}>
            <div className={ActiveSetCSS.setInfoContainer}>
                <h5>{index+1}.</h5>
 
                <div>
                    <h5>{ex.REPS}</h5>
                    <h5>Reps</h5>
                </div>

                <div>
                    <h5>{ex.WEIGTH}</h5>
                    <h5>Kg</h5>
                </div>
            </div>

            <div className={ActiveSetCSS.radioTileGroup}>

                <div className={ActiveSetCSS.inputContainer}>
                    <input type="radio" name={groupName} className={ActiveSetCSS.takeAway}/>
                    <div className={ActiveSetCSS.radioTile}>
                        <img src={require('../../icons/test2.png')} className={ActiveSetCSS.radioImg} />
                    </div>
                </div>

                <div className={ActiveSetCSS.inputContainer}>
                    <input type="radio" name={groupName} className={ActiveSetCSS.done}/>
                    <div className={ActiveSetCSS.radioTile}>
                        <img src={require('../../icons/test1.png')} className={ActiveSetCSS.radioImg} />
                    </div>
                </div>
                
            </div>
        </div>
    );
}