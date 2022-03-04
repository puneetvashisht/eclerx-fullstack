import React, {useState} from 'react'
import ViewEmployeesItem from './ViewEmployeesItem';

export default function ViewEmployees(props) {

    
    // const [employees, setEmployees] = useState(props.employees)

    const deleteEmployee = (index) => {
        // employees.splice(index, 1);
        // console.log(employees);
        // setEmployees([...employees]);
    }


    let employeeList = props.employees.map((employee, i) => {
        console.log(employee);
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
