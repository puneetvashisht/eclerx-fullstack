import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ViewEmployee from './components/ViewEmployee'
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import Login from './components/Login';

function App() {
  return (
    <div className="App">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Employee App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/view">View Employees</Link>
        <Link className="nav-link" to="/add">Add Employee</Link>
        <a className="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>

      
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="view" element={<ViewEmployee />} />
        <Route path="add" element={<AddEmployee />} />
        <Route path="update/:id/:name" element={<UpdateEmployee />} />
      </Routes>
  
    </div>
  );
}

export default App;



