import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PATHS from '../../paths';
import NaigationCSS from './Navigation.module.css';
import AuthContext from '../../contexts/authProvider';

const Navigation: React.FC = () => {
  const {
    isAuth,
  } = useContext(AuthContext);

  return (
    <nav className={NaigationCSS.appNavigation}>
      <ul className={NaigationCSS.navigationList}>
        <li><Link to={PATHS.home} className='nav-link'>Home</Link></li>
        <li><Link to={PATHS.createWorkout} className='nav-link'>Create</Link></li>
        {!isAuth && (
            <>
                <li><Link to={PATHS.login}>Login</Link></li>
                <li><Link to={PATHS.register}>Register</Link></li>
            </>
        )}
        {isAuth && (
            <>
                <li><Link to={PATHS.profile}>Profile</Link></li>
                <li><Link to={PATHS.logout}>Logout</Link></li>
            </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
