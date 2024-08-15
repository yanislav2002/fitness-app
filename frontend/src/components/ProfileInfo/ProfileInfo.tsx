import { useContext } from 'react';
import ProfileInfoCSS from './ProfileInfo.module.css';
import AuthContext from '../../contexts/authProvider';
import { Link } from 'react-router-dom';
import PATHS from '../../paths';


export default function ProfileInfo({...userInfo}):JSX.Element {
    const {userId} = useContext(AuthContext);
    
    return(
        <section className={ProfileInfoCSS.componentBody}>
            <div className={ProfileInfoCSS.profileImageContainer}>
                {userInfo[0]?.USER_PHOTO !== 'no photo' ? (
                    <img src={userInfo[0]?.USER_PHOTO} alt="Profile" />
                ) : (
                    <img src="https://i.pinimg.com/originals/d1/51/62/d15162b27cd9712860b90abe58cb60e7.jpg" alt="Default Profile" />
                )}
            </div>

            <div className={ProfileInfoCSS.userNamesContainer}>
                <h4>{userInfo[0]?.NAME}</h4>
                <h4>{userInfo[0]?.LAST_NAME}</h4> 
            </div>

            <p>{userInfo[0]?.EMAIL}</p>

            <p>{userInfo[0]?.USER_NAME}</p>

            <Link to={`${PATHS.userDetails}/${userId}`}><img src={require('../../icons/three-dots.png')} className='three-dots' /></Link>
        </section>
    );
}