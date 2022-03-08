import React, {useState, useEffect} from 'react'

export default function ViewEmployee() {

  const [employees, setEmployees] = useState([]);
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8000/employees/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setEmployees(data);
    })
  }, [loaded])

  const deleteEmployee = (id) => {
    fetch('http://localhost:8000/employees/' + id, {
        method: 'DELETE'
    })
    .then(res => res.json())
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
