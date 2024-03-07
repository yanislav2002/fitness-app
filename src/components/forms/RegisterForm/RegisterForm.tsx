

export default function RegisterForm(): JSX.Element {
    return (
        <form>
            <h2>Register</h2>

            <input type="email" placeholder='email' />

            <input type="text" placeholder='user name' />

            <input type="password" placeholder='password' />

            <input type="password" placeholder='repeat password' />

            <input type="submit" value={"register now"} />     

            <p><a href="#" className='form-link'>If you already have a profile click here</a></p>
        </form>
    )
}