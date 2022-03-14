import React, {useState, useEffect} from 'react'
// import * as actions from '../actions/employee-actions'
import {fetchEmployees, deleteEmployee} from '../store/employee-reducer'
import {useSelector, useDispatch} from 'react-redux'

function ViewEmployee() {

  const employees = useSelector((state) => {
    console.log(state)
      return state.er.employees
    })

    const dispatch = useDispatch();

  // const [employees, setEmployees] = useState([]);
  // const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    console.log('Init ... View Employees .... ');
    dispatch(fetchEmployees())
  }, [dispatch])

  // const deleteEmployee = (id) => {
  //   props.onDeleteEmployee(id);
  // }

  let employeesList = employees.map((e, i)=>
  {
  return (
    <tr key={e.id}>
    <th scope="row">{e.id}</th>
    <td>{e.name}</td>
    <td>{e.salary}</td>
    <td><button onClick={()=>dispatch(deleteEmployee(e.id))} className='btn btn-danger'>  X </button></td>
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


// use selector
// const mapStateToProps = (state) => {
//   // console.log(state)
//   return {
//       employees: state.employeeReducer.employees
//   }
// }


// use dispatch
// const mapDispatchToProps = (dispatch) => {
//   return {
//       // onDeleteEmployee: (id) => dispatch({type: actions.DELETE_EMPLOYEE, payload: {id}}),
//       onDeleteEmployee: (id) => dispatch(actions.deleteEmployee(id)),
//       onFetchEmployees: () => dispatch(actions.fetchEmployees())
//   }
// }


export default ViewEmployee