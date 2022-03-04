import React, {useState} from 'react'
import DropdownItem from './DropdownItem';

export default function Dropdown(props) {


  // way to set state....  
  const [show, setShow] = useState(false); 
  const [courses, setCourses] = useState([
      'React', 'Angular', 'NodeJS', 'Test'
  ])

  const [label, setLabel] = useState(props.label)
  // changing the state... show->true->false
  const toggleShow = () => {
        setShow(!show);
        console.log(show);
       
  }

  const handleItemClick = (course)=>{
      console.log('Item clicked...', course);
      setLabel(course);
      setShow(false);
  }

  let coursesList = courses.map((course, i) => <DropdownItem course={course} whenItemClicked={handleItemClick}></DropdownItem>);
  console.log(coursesList);

  return (
    <div className="dropdown">
  <button onClick={toggleShow} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {label}
  </button>
  <ul className={show?'dropdown-menu show': 'dropdown-menu'} aria-labelledby="dropdownMenuButton1">
     {coursesList}
  </ul>
</div>
  )
}
