import { Link } from "react-router-dom";
import PATHS from "../../../paths";
import { SyntheticEvent, useEffect, useRef, useState, useContext } from "react";
import AuthContext from "../../../contexts/authProvider";


interface FormData {
    email: string;
    password: string;
}

const FORM_KEYS: FormData = {
    email: 'email',
    password: 'password',
};

const LoginForm: React.FC = () => {
    const { loginSubmitHandler } = useContext(AuthContext);

    const emailRef = useRef<HTMLInputElement>(null);
    const errorRef = useRef<HTMLParagraphElement>(null); 

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(()=> {
        emailRef.current!.focus();
    }, []);

    useEffect(()=>{
        setErrorMessage('');
    }, [email, password]);

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            loginSubmitHandler(email, password)
            setEmail('');
            setPassword('');
        } catch (error: any) {            
            if (!error?.response) {
                setErrorMessage('No server response.')
            } else if (error.response.status === 400) {
                setErrorMessage('Missing email or password.')
            } else if (error.response.status === 401) {
                setErrorMessage('Unauthorized.')
            } else {
                setErrorMessage('Login Failed.')
            }
        }   
    }


    return (
        <form onSubmit={handleSubmit}>
            <p ref={errorRef} className={errorMessage ? 'errorMessage' : 'offscreen'} aria-live='assertive' >{errorMessage}</p>

            <h2>Login</h2>

            <input 
                type='email' 
                placeholder={FORM_KEYS.email}
                ref={emailRef}
                autoComplete='off'
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
            />

            <input 
                type="password" 
                placeholder={FORM_KEYS.password}
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                required
            />

            <button disabled={!email || !password ? true : false}>Sign in</button>   

            <p><Link to={PATHS.register} className='form-link'>If you dont't have a profile click here</Link></p>

        </form>
    )
}

export default LoginForm;