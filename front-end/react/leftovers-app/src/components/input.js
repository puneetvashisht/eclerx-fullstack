import React, { useState } from 'react'

function UpdateComponents(OriginalComponent) {

  function NewComponent(){

    const [first, setFirst] = useState()
    const [second, setSecond] = useState()
    const [result, setResult] = useState();
    return (
        <>

            <input type="number" placeholder='Enter oper1' value={first} onChange={(e)=>setFirst(e.target.value)}/>
            <input type="number" placeholder='Enter oper2' value={second} onChange={(e)=>setSecond(e.target.value)}/>
            <OriginalComponent oper1={first} oper2={second} setResult={setResult}/>
            <p>Result : {result}</p>
        </>
      )
  }  
  return NewComponent;
  
}


export default UpdateComponents;
