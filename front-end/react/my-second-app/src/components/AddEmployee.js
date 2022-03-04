import React from 'react'

export default function AddEmployee() {

    const addEmployee= ()=>{
        // push it to employees 
        var emp = {firstName: 'Test', lastName: 'TestLast', salary: 11111}
    }

  return (
    <button onClick={addEmployee}>Add Employee</button>
  )
}
