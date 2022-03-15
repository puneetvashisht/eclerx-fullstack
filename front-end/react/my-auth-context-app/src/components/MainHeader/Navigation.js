import React from 'react';
import { useAuth } from '../../context/auth';

import classes from './Navigation.module.css';

const Navigation = () => {

  const {isAuthenticated, setIsAuthenticated} = useAuth();
  console.log('In navigation ',  isAuthenticated);

  return (
    <nav className={classes.nav}>
      <ul>
        {isAuthenticated && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <button onClick={()=>setIsAuthenticated(false)}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
