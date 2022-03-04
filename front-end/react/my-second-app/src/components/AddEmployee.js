import React from 'react'

export default function AddEmployee(props) {

    const addEmployee= ()=>{
        // push it to employees 
        var emp = {firstName: 'Test', lastName: 'TestLast', salary: 11111}
        props.whenEmployeeAdded(emp);
    }

  return (
    <button onClick={addEmployee}>Add Employee</button>
  )
}
