
import './App.css';
import AddEmployee from './components/AddEmployee';
import Badge from './components/Badge';
import Dropdown from './components/Dropdown';
import ViewEmployees from './components/ViewEmployees';
import React, {useState} from 'react'

function App() {

  // useState --- 
  const [employees, setEmployees] = useState([])

  const addEmployee = (emp) => {
    console.log('In parent...');
    console.log(emp)
    setEmployees([...employees, emp])
  }

  return (
    <div>
      {/* <Badge caption="Votes"/>
      <Dropdown label="Select Courses" /> */}
      <ViewEmployees employees={employees}/>
      <AddEmployee whenEmployeeAdded={addEmployee}/>
    </div>
  );
}

export default App;
