import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ViewEmployee() {

  const [employees, setEmployees] = useState([]);
  const [loaded, setLoaded] = useState(false)

  useEffect(async() => {
    // fetch('http://localhost:8000/employees/')
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     setEmployees(data);
    // })
    // axios.get('http://localhost:8000/employees/')
    // .then(res => {
    //     console.log(res.data);
    //     setEmployees(res.data);
    // })
    let res = await axios.get('http://localhost:8000/employees/')
    setEmployees(res.data)
    // .then(res => {
    //     console.log(res.data);
    //     setEmployees(res.data);
    // })


  }, [loaded])

  const deleteEmployee = (id) => {
    // fetch('http://localhost:8000/employees/' + id, {
    //     method: 'DELETE'
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     setLoaded(!loaded)
    // })
    axios.delete('http://localhost:8000/employees/' + id, )
    // .then(res => res.json())
    .then(data => {
        console.log(data);
        setLoaded(!loaded)
    })
  }

  let employeesList = employees.map((e, i)=>
  {
  return (
    <tr key={e.id}>
    <th scope="row">{e.id}</th>
    <td><Link className="nav-link" to={`/update/${e.id}/${e.name}`}>{e.name}</Link></td>
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
