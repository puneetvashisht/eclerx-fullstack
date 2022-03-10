import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'


function ViewEmployee(props) {

  // const [employees, setEmployees] = useState([]);
  // const [loaded, setLoaded] = useState(false)


  const deleteEmployee = (id) => {
    props.onDeleteEmployee(id);
  }

  let employeesList = props.employees.map((e, i)=>
  {
  return (
    <tr key={e.id}>
    <th scope="row">{e.id}</th>
    <td>{e.name}</td>
    <td>{e.salary}</td>
    <td><button onClick={()=>deleteEmployee(e.id)} className='btn btn-danger'>  X </button></td>
    </tr>
  )
  })
  

  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Salary</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      {employeesList}
    </tbody>
  </table>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      employees: state.employeeReducer.employees
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onDeleteEmployee: (id) => dispatch({type: 'DELETE_EMPLOYEE', payload: {id}})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployee)