import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link } from "react-router-dom";
import { logout } from '../store/auth-reducer';


const auth = (state) => {
    return state.ar.auth
}

export default function Header() {
const user = useSelector(auth);
const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Employee App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {!user.auth &&<Link className="nav-link" to="/">Login</Link>}
        {user.auth && <Link className="nav-link" to="/view">View Employees</Link>}
        {user.auth &&  <Link className="nav-link" to="/add">Add Employee</Link>}
        {user.auth && <Link className="nav-link" to="/viewproduts">View Products</Link>}
        <a className="nav-link disabled">Disabled</a>
        {user.auth &&<a href="#" onClick={()=>dispatch(logout())} className="nav-link">Logout</a>}

      </div>
    </div>
  </div>
</nav>
  )
}
