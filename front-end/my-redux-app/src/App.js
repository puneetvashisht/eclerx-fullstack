import logo from './logo.svg';
import './App.css';
import * as React from "react";
import AddEmployee from './components/AddEmployee'
import ViewEmployee from './components/ViewEmployee'
import ListEmployee from './components/ListEmployee';
// import ViewProducts from './components/ViewProducts';
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import Header from './components/Header';

const ViewProducts = React.lazy(() => import("./components/ViewProducts"));


const auth = (state) => {
    return state.ar.auth
}

function App() {
  return (
    < >
      {/* <AddEmployee />
      <hr />
      <ListEmployee />
      <hr />
      <ViewEmployee></ViewEmployee>
      <hr />
      <ViewProducts></ViewProducts> */}

      <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
       
        <Route element = {<PrivateRoute/>}>   
          <Route path="view" element={<ViewEmployee />} />
          <Route path="add" element={<AddEmployee />} />
        </Route>

        {/* <Route path="viewproduts" element={<ViewProducts />} /> */}
        
        <Route
            path="viewproduts"
            element={
              <React.Suspense fallback={<>...</>}>
                <ViewProducts />
              </React.Suspense>
            }
          />
        
        {/* <Route path="update" element={<UpdateEmployee />} /> */}
        {/* <Route path="update/:id/:name" element={<UpdateEmployee />} /> */}
      </Routes>

    </>
  );
}

export default App;


function PrivateRoute(){
  const user = useSelector(auth);
  return (
    <div>{user.auth ? <Outlet/> : <Navigate to="/" />}</div>
  )
}
