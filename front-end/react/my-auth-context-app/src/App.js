import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

import {AuthContext} from './context/auth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   setIsLoggedIn(true);
  // };

  const handleAuth = (data) => {
    setIsAuthenticated(data);
  };



  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated: handleAuth}}>
      <MainHeader />
      <main>
        {!isAuthenticated && <Login  />}
        {isAuthenticated && <Home  />} 
      </main>
    </AuthContext.Provider>
  );
}

export default App;
