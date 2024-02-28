import './Navigation.css'


export default function Navigation(): JSX.Element {
    return (
        <nav>
            <ul className='nav-list'>
                <li><a href="#" className='nav-link'>Home</a></li>
                <li><a href="#" className='nav-link'>Login</a></li>
                <li><a href="#" className='nav-link'>Sign in</a></li>
                <li><a href="#" className='nav-link'>Logout</a></li>
            </ul>
        </nav>
    )
}