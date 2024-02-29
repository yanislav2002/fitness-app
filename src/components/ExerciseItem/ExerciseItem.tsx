import './ExerciseItem.css'

export default function ExerciseItem():JSX.Element {
    return (
        <div className="exercise-item">
            <div>
                <p className='exercise-name'>Bench Press</p>
                <p className='exercise-muscle-group'>Chest</p>
                <p className='exercise-muscle-group'>Barbell</p>
            </div>
            
            <a href="#"><img src={require('../../icons/add-icon2.png')} className='add-icon' /></a>
        </div>
    );
}