import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PATHS from '../../paths';
import AuthContext from '../../contexts/authProvider';


const Logout: React.FC = () => {
    const navigate = useNavigate();

    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        logoutHandler();
        navigate(PATHS.home);
    }, []);

    return null;
}

export default Logout;
