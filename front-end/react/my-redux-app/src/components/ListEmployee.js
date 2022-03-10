import React, {useState, useEffect} from 'react'


export default function ListEmployee() {

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
