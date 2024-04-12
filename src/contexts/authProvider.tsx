import { ReactNode, createContext, useState, useEffect } from "react";
import PATHS from "../paths";
import { useNavigate } from "react-router";
import usePersistedState from "../hooks/use-persistent-state";
import axios from "axios";

interface AuthContextType {
    loginSubmitHandler: (email: string, password: string) => Promise<void>;
    registerSubmitHandler: (email: string, password: string, name: string) => Promise<void>;
    logoutHandler: () => void;
    name: string;
    email: string;
    userId: string, 
    isAuth: boolean;
}
 
interface AuthProviderProps {
    children: ReactNode;
}

const LOGIN_URL = 'http://localhost:9009/users/login';
const REGISTER_URL = 'http://localhost:9009/users/register'; 

export const AuthContext = createContext<AuthContextType>({
    loginSubmitHandler: async () => {},
    registerSubmitHandler: async () => {},
    logoutHandler: () => {},
    name: '',
    email: '', 
    userId: '', 
    isAuth: false,
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const accessTokenKey = 'accessToken';
    const navigate = useNavigate();

    const [auth, setAuth] = usePersistedState('auth', {});

    const [isAuth, setIsAuth] = useState<boolean>(() => !!localStorage.getItem(accessTokenKey));

    useEffect(() => {
        setIsAuth(!!localStorage.getItem(accessTokenKey));


    }, [auth]);

    const loginSubmitHandler = async (email: string, password: string) => {
        const result = await axios.post(
            LOGIN_URL,
            { email, password },
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            }
        );

        setAuth(result.data);

        localStorage.setItem(accessTokenKey, result.data.accessToken);
        navigate(PATHS.home);
    };

    const registerSubmitHandler = async (email: string, password: string, username: string) => {
        const result = await axios.post(
            REGISTER_URL,
            { email, username, password },
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            }
        );

        await loginSubmitHandler(email, password);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem(accessTokenKey);
        setIsAuth(false);
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        name: auth.user?.USER_NAME, 
        email: auth.user?.EMAIL, 
        userId: auth.user?.ID, 
        isAuth,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
