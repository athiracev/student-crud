import React, { useState } from 'react'
import {Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';


function LoginTeacher() {

  const [uname,setUname]=useState('')
  const [pwd,setPwd]=useState('')
  const navigate=useNavigate()

  

  
  const handleUsername=(event)=>{
    setUname(event.target.value)
    

  }
  const handlePassword=(event)=>{
    setPwd(event.target.value)

  }
  console.log(uname,pwd)

  const handleSubmit=()=>{

    if((uname=='teacher@gmail.com') && (pwd=='123')){
     

        navigate('/dashboard')
    }

  }

  return (
    <>
      <h1 style={{ textAlign: 'center',textShadow:'2px 2px blue'}}>LOGIN PAGE</h1> <br /> <br />
      <div className='shadow w-100  d-flex justify-content-center align-items-center'  style={{height:'600px',width:'80rem'}}>
        <Form className=' shadow bg-body rounded p-5   ' style={{ width: '100vh', alignContent: 'center' }}>
          <Form.Group className="mb-3  d-flex justify-content-center align-items-center"  >
            <Form.Label >UserName </Form.Label> &nbsp; &nbsp;
            <Form.Control className='shadow '  value={uname} onChange={handleUsername} style={{ width: '20rem',backgroundColor:'#F0ECEA' }} type="email" placeholder="name@example.com" required={true} />
          </Form.Group>
         

          <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
            <Form.Label>Password</Form.Label>&nbsp; &nbsp;
            <Form.Control className='shadow' value={pwd} onChange={handlePassword} style={{ width: '20rem' ,backgroundColor:'#F0ECEA'}} type="password" placeholder="enter password" required={true} />
          </Form.Group>

          <div className='text-center'>
          <button type='submit' className='btn btn-light '  onClick={handleSubmit}>Submit</button> &nbsp; &nbsp;
          <button type='reset' className='btn btn-light ' >Reset</button>
          </div>


        </Form>
      
      </div>

      
    </>
  )
}

export default LoginTeacher
