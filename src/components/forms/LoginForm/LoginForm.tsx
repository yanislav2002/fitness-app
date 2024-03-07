

export default function LoginForm(): JSX.Element {
    return (
        <form>
            <h2>Login</h2>

            <input type="email" placeholder='email' />

            <input type="password" placeholder='password' />

            <input type="submit" value={"login now"} />     

            <p><a href="#" className='form-link'>If you dont't have a profile click here</a></p>
        </form>
    )
}