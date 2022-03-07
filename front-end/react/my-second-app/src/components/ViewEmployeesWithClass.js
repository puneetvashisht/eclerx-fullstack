import React, { Component } from 'react'
import ViewEmployeesItem from './ViewEmployeesItem';

export default class ViewEmployeesWithClass extends Component {



  render() {

    let employeeList = this.props.employees.map((employee, i) => {
        console.log(employee);
        return (
            <ViewEmployeesItem employee={employee} index={i} key={i}/>
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
}
