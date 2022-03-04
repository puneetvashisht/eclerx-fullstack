import React from 'react'

export default function DropdownItem(props) {

    // const handleItemClick = ()=>{
    //     // calling method in parent component
    //     props.whenItemClicked(props.course);
    // }

  return (
    <li><a onClick={()=> props.whenItemClicked(props.course)} className="dropdown-item" href="#">{props.course}</a></li>
    // <li><a className="dropdown-item" href="#">{props.course}</a></li>
  )
}
