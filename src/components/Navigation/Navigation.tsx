import './Navigation.css'
import { Link } from 'react-router-dom';
import PATHS from '../../paths';


export default function Navigation(): JSX.Element {
    return (
        <nav>
            <ul className='nav-list'>
                <li><Link to={PATHS.home} className='nav-link'>Home</Link></li>
                <li><Link to={PATHS.profile} className='nav-link'>Profile</Link></li>
                <li><Link to={PATHS.createWorkout} className='nav-link'>Create</Link></li>
                <li><Link to={PATHS.login} className='nav-link'>Login</Link></li>
                <li><Link to={PATHS.register} className='nav-link'>Register</Link></li>
            </ul>
        </nav>
    )
}