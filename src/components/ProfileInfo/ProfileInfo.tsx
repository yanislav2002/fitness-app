import './ProfileInfo.css'


export default function ProfileInfo():JSX.Element {
    return(
        <section className="profile-info">
            <div className="image-container">
                <img src="https://i1.sndcdn.com/avatars-000276350007-i8sdtr-t500x500.jpg" />
            </div>

            <div className="user-info">
                <h4 className='profile-name'>Gabe</h4>
                <h4 className='profile-name'>Newell</h4>
            </div>

            <p>fatgaben@gmail.com</p>

            <p>_gaben_</p>

            <a href="#"><img src={require('../../icons/three-dots.png')} className='three-dots' /></a>
        </section>
    );
}