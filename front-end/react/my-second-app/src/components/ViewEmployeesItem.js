import React from 'react'

export default function ViewEmployeesItem(props) {
  return (
    <tr >
      <th scope="row">{props.index + 1}</th>
      <td>{props.employee.firstName}</td>
      <td>{props.employee.lastName}</td>
      <td>{props.employee.salary}</td>
      <td><button onClick={()=>props.whenItemDeleted(props.index)}> X </button></td>
    </tr>
  )
}
