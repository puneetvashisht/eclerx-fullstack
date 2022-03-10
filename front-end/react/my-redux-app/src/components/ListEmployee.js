import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';


function ListEmployee(props) {

  // Removed local state
  // const [employees, setEmployees] = useState([]);
  // const [loaded, setLoaded] = useState(false)

  let employeesList = props.employees.map((e, i)=>
  {
  return (
   <li key={e.id}>{e.name}</li>
  )
  })
  

  return (
    <ol>
      {employeesList}
    </ol>
  )
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
      employees: state.employeeReducer.employees
  }
}

// connected to one single store -- that contains all state
export default connect(mapStateToProps)(ListEmployee);