import React, {useState} from 'react'

export default function Dropdown(props) {


  // way to set state....  
  const [show, setShow] = useState(false); 
  const [courses, setCourses] = useState([
      'React', 'Angular', 'NodeJS', 'Test'
  ])
  // changing the state... show->true->false
  const toggleShow = () => {
        setShow(!show);
        console.log(show);
  }

  let coursesList = courses.map((course, i) => <li><a className="dropdown-item" href="#">{course}</a></li>);
  console.log(coursesList);

  return (
    <div className="dropdown">
  <button onClick={toggleShow} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {props.label}
  </button>
  <ul className={show?'dropdown-menu show': 'dropdown-menu'} aria-labelledby="dropdownMenuButton1">
     {coursesList}
  </ul>
</div>
  )
}
