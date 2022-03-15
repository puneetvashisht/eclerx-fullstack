import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee'
import ViewEmployee from './components/ViewEmployee'
import ListEmployee from './components/ListEmployee';
import ViewProducts from './components/ViewProducts';
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';


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
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Employee App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Login</Link>
        <Link className="nav-link" to="/view">View Employees</Link>
        <Link className="nav-link" to="/add">Add Employee</Link>
        <Link className="nav-link" to="/viewproduts">View Products</Link>
        <a className="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element = {<PrivateRoute/>}>
        < Route path="/view" element={<ViewEmployee />} />
        <Route path="add" element={<AddEmployee />} />
        <Route path="viewproduts" element={<ViewProducts />} />
        </Route>
        
        
        
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
