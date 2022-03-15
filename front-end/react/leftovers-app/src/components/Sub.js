import React from 'react'
import UpdateComponents from './input'

function Sub(props) {

  const sub = () => {
    props.setResult(parseInt(props.oper1) - parseInt(props.oper2))
}
  return (
    <div>
        <button onClick={()=> sub()}> - </button>
    </div>
  )
}

export default UpdateComponents(Sub);
