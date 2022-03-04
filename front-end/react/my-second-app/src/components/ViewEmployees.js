import React, {useState} from 'react'
import ViewEmployeesItem from './ViewEmployeesItem';

export default function ViewEmployees() {

    const [employees, setEmployees] = useState([
        {firstName: 'Ravi', lastName: 'Kumar', salary: 34334},
        {firstName: 'Priya', lastName: 'Negi', salary: 44334},
        {firstName: 'Nidhi', lastName: 'Arora', salary: 44334}
    ])

    const deleteEmployee = (index) => {
        employees.splice(index, 1);
        console.log(employees);
        setEmployees([...employees]);
    }


    let employeeList = employees.map((employee, i) => {
        return (
            <ViewEmployeesItem employee={employee} whenItemDeleted={deleteEmployee} index={i} key={i}/>
        )
    })

  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Salary</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    
   {employeeList}
    
  </tbody>
</table>
  )
}
