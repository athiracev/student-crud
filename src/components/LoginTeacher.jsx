import React, { useState } from 'react'
import {Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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

    

    if((uname=='admin@gmail.com') && (pwd=='234562')){
     

        navigate('/dashboard')
        toast.success('Welcom to dashboard')
    }else if(!(uname=='admin@gmail.com') && !(pwd=='234562')){
      toast.warning('Enter Valid credentials')
    }

  }

  const handelReset=()=>{
    setPwd('')
    setUname('')
  }

  return (
    <>
      <div style={{backgroundColor:'#BED7DC'}}>
     <h1 style={{textAlign:'center',color:'#18587A'}}>Login Here!!!</h1>
      <div className='shadow w-100  d-flex justify-content-center align-items-center'  style={{height:'600px',width:'80rem'}}>
        <Form className=' shadow bg-body rounded p-5   ' style={{ width: '100vh', alignContent: 'center'}}>
          <Form.Group className="mb-3  d-flex justify-content-center align-items-center"  >
            <Form.Label  style={{color:'black'}} >UserName </Form.Label> &nbsp; &nbsp;
            <Form.Control className='shadow '  value={uname} onChange={handleUsername}  style={{ width: '20rem',borderRadius:'7px'}} type="email" placeholder="name@example.com" required={true} />
          </Form.Group>
         

          <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
            <Form.Label  style={{color:'black'}}>Password</Form.Label>&nbsp; &nbsp;
            <Form.Control className='shadow' value={pwd} onChange={handlePassword} style={{ width: '20rem' ,borderRadius:'7px'}} type="password" placeholder="enter password" required={true} />
          </Form.Group>

          <div className='text-center'>
          <button type='submit' className='shadow btn btn-light '  style={{backgroundColor:'lightblue',borderRadius:'5px'}} onClick={handleSubmit}>Submit</button> &nbsp; &nbsp;
          <button type='reset' className='shadow btn btn-light ' style={{backgroundColor:'lightblue',borderRadius:'5px'}} onClick={handelReset}>Reset</button>
          </div>


        </Form>
      
      </div>
      </div>

      
    </>
  )
}

export default LoginTeacher
