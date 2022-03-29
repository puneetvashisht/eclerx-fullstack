import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';


function ListEmployee() {

  // Removed local state
  // const [employees, setEmployees] = useState([]);
  // const [loaded, setLoaded] = useState(false)

  const employees = useSelector((state) => {
    console.log(state)
      return state.er.employees
    })

  let employeesList = employees.map((e, i)=>
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

// use selector
// const mapStateToProps = (state) => {
//   console.log(state)
//   return {
//       employees: state.employeeReducer.employees
//   }
// }

// connected to one single store -- that contains all state
export default ListEmployee;