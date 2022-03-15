import React from 'react'
import UpdateComponents from './input';

function Add(props) {

    const sum = () => {
        props.setResult(parseInt(props.oper1) + parseInt(props.oper2))
    }

  return (
    <div>
        <button onClick={()=> sum()}> + </button>
    </div>
  )
}


export default UpdateComponents(Add);
