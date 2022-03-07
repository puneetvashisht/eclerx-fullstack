
import './App.css';
import AddEmployee from './components/AddEmployee';
import Badge from './components/Badge';
import Dropdown from './components/Dropdown';
import ViewEmployees from './components/ViewEmployees';
import React, {useState} from 'react'
import BadgeWithClass from './components/BadgeWithClass';
import ViewEmployeesWithClass from './components/ViewEmployeesWithClass';

function App() {

  // useState --- 
  const [employees, setEmployees] = useState([
    {firstName: "Ravi", lastName: 'Sharma', salary: 66666},
    {firstName: "Harshit", lastName: "Tomar", salary: 34434}

  ])

  const addEmployee = (emp) => {
    console.log('In parent...');
    console.log(emp)
    setEmployees([...employees, emp])
  }

  return (
    <div>
      <Badge caption="Votes"/>
      <BadgeWithClass caption="Votes"/>
      <ViewEmployees employees={employees}/>
      <hr/>
      <ViewEmployeesWithClass employees={employees}/>
      {/* <Badge caption="Votes"/>
      <Dropdown label="Select Courses" /> */}
      {/* <ViewEmployees employees={employees}/>
      <AddEmployee whenEmployeeAdded={addEmployee}/> */}
    </div>
  );
}

export default App;
