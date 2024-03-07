import ProfileInfoCSS from './ProfileInfo.module.css';


export default function ProfileInfo():JSX.Element {
    return(
        <section className={ProfileInfoCSS.componentBody}>
            <div className={ProfileInfoCSS.profileImageContainer}>
                <img src="https://i1.sndcdn.com/avatars-000276350007-i8sdtr-t500x500.jpg" />
            </div>

            <div className={ProfileInfoCSS.userNamesContainer}>
                <h4>Gabe</h4>
                <h4>Newell</h4> 
            </div>

            <p>fatgaben@gmail.com</p>

            <p>_gaben_</p>

            <a href="#"><img src={require('../../icons/three-dots.png')} className='three-dots' /></a>
        </section>
    );
}