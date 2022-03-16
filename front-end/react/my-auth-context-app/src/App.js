import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import { useSelector } from 'react-redux';


function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isAuthenticated = useSelector((state)=>{
    return state.auth
  })

  return (
    <>
      <MainHeader />
      <main>
        {!isAuthenticated && <Login  />}
        {isAuthenticated && <Home  />} 
      </main>
      </>
  );
}

export default App;
