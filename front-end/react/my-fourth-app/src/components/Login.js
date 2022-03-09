import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {


    let navigate = useNavigate();

    const login = async()=> {
       let res = await fetch('http://localhost:8000/login');
       let data = await res.json();

       console.log(data)
       if(data.auth){
        navigate('/view')
       }
       else{
           console.log('Display error message!');
       }


        // ()=> navigate('/view')
    }

  return (
    <button className='btn btn-primary' onClick={login}>Login</button>
  )
}
