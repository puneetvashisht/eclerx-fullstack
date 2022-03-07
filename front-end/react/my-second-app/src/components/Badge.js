import React, {useEffect, useState} from 'react'

export default function Badge(props) {

  const [count, setCount] = useState(0)

  // acts like componentDidMount & componentDidUpdate
  useEffect(() => {
    console.log('useEffect invoked...')
    fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(res=> res.json())
        .then(data =>{
          setCount(data.id);
        });

  }, [])
  

  const handleClick = () => {
      console.log('click event');
    //   props.caption = "Something"
    setCount(count + 1);
  }

  return (
    <button type="button" onClick={handleClick} className="btn btn-primary">
    {props.caption} <span className="badge bg-secondary">{count}</span>
    </button>
  )
}
