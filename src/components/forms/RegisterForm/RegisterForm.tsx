import React, { useState, useRef, useEffect, SyntheticEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PATHS from '../../../paths';
import axios from 'axios';

interface FormData {
    email: string;
    userName: string;
    password: string;
    repeatPassword: string;
}

const FORM_KEYS: FormData = {
    email: 'email',
    userName: 'userName',
    password: 'password',
    repeatPassword: 'repeatPassword',
};

const USERNAME_REGEX = /^[a-zA-Z0-9]{6,22}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,24}$/;
const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const REGISTER_URL = 'http://localhost:9009/users/register'

const RegisterForm: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const errorRef = useRef<HTMLDivElement>(null);

    const [email, setEmail] = useState<string>('');
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false);

    const [username, setUsername] = useState<string>('');
    const [isValidUsername, setIsValidUsername] = useState<boolean>(false);

    const [password, setPassword] = useState<string>('');
    const [isValidPassword, setIsValidPassword] = useState<boolean>(false);

    const [repeatPassword, setRepeatPassword] = useState<string>('');
    const [isValidRepeatPassword, setIsValidRepeatPassword] = useState<boolean>(false);

    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        emailRef.current!.focus();
    }, []);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setIsValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = USERNAME_REGEX.test(username);
        console.log(result);
        console.log(username);
        setIsValidUsername(result);
    }, [username])

    useEffect(() => {
        const result = PASSWORD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setIsValidPassword(result);
        const isMatch = password === repeatPassword;
        setIsValidRepeatPassword(isMatch);
    }, [password, repeatPassword])

    useEffect(() => {
        setErrorMessage('');
    }, [email, username, password, repeatPassword])

    useEffect(() => {
        const handleSuccess = async () => {
            if (isSuccess) {
                navigate(PATHS.home);
                
                setEmail('');
                setUsername('');
                setPassword('');
                setRepeatPassword('');
            }
        };

        handleSuccess();
    }, [isSuccess]);

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        console.log(email, username, password);

        try {
            const response = await axios.post(
                REGISTER_URL,
                { email, username, password }, 
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
              );

              setIsSuccess(true);
        } catch (error) {
            console.log(error);
        }   
    }

    return (
        <form onSubmit={handleSubmit}>
            <p ref={errorRef} className={errorMessage ? 'errorMessage' : 'offscreen'} aria-live='assertive' >{errorMessage}</p>

            <h2>Register</h2>

            <input 
                placeholder='email'
                type='email'
                id={FORM_KEYS.email}
                ref={emailRef}
                autoComplete='off'
                onChange={(event) => setEmail(event.target.value)}
                required
            />

            <p className={email && !isValidEmail ? 'instructions' : 'offscreen'}>
                <img src={require('../../../icons/attention.png')}></img>
                <p className='attention-text'>Please enter a valid email address.</p>
            </p>

            <input 
                placeholder='username'
                type='text' 
                id={FORM_KEYS.userName}
                autoComplete='off'
                onChange={(event) => setUsername(event.target.value)}
                required
            />

            <p className={username && !isValidUsername ? 'instructions' : 'offscreen'}>
                <img src={require('../../../icons/attention.png')}></img>
                <p className='attention-text'>Username requirements:</p>
                <p>Between 6 and 22 characters.</p>
                <p>Only letters and numbers allowed.</p>
            </p>
               
            <input 
                placeholder='password'
                type='password' 
                id={FORM_KEYS.password}
                onChange={(event) => setPassword(event.target.value)}
                required
            />

            <p className={password && !isValidPassword ? 'instructions' : 'offscreen'}>
                <img src={require('../../../icons/attention.png')}></img>
                <p className='attention-text'>Password requirements:</p>
                <p>Between 8 and 24 characters.</p>
                <p>Must include at least one uppercase letter, lowercase letter, special symbol.</p>
                <p>Allowed special sumbols: @#$%^&</p>
            </p>

            <input 
                placeholder='repeat password'
                type='password' 
                id={FORM_KEYS.repeatPassword}
                onChange={(event) => setRepeatPassword(event.target.value)}
                required
            />

            <p className={repeatPassword && !isValidRepeatPassword ? 'instructions' : 'offscreen'}>
                <img src={require('../../../icons/attention.png')}></img>
                <p className='attention-text'>Passwords are not equal.</p>
            </p>

            <button disabled={!isValidUsername || !isValidEmail || !isValidPassword || !isValidRepeatPassword ? true : false}>Sign up</button>   

            <p><Link to={PATHS.login} className='form-link'>If you already have a profile click here</Link></p>
        </form>
    );
};

export default RegisterForm;
