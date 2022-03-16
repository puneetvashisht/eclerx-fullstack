import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Navigation.module.css';

const Navigation = () => {

  const dispatch = useDispatch();
  
  const isAuthenticated = useSelector((state)=>{
    return state.auth
  })

  // const {isAuthenticated, setIsAuthenticated} = useAuth();

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
            <button onClick={()=>dispatch({type: 'LOGOUT'})}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
