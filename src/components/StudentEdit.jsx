import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {  getStudentOne, getStudent, updateStudent } from '../services/allApi'
import Button from 'react-bootstrap/Button';





function StudentEdit() {


  const [addStudent, setAddStudent] = useState({
    studentname: '',
    dob: '',
    course: '',
    address: '',
    email: ''
  });
  const {id}=useParams()
  const navigate = useNavigate()



  


  const getdata = (e) => {

    const { name, value } = e.target
    // console.log(name, value)

    if (name === 'studentname') {
      setAddStudent({ ...addStudent, studentname: value })
    }
    if (name === 'dob') {
      // Convert the string representation of the date to a Date object
      setAddStudent({ ...addStudent, dob: value });
    } else {
      setAddStudent({ ...addStudent, [name]: value });
    }
    if (name === 'course') {
      setAddStudent({ ...addStudent, course: value })
    }
    if (name === 'address') {
      setAddStudent({ ...addStudent, address: value })
    }
    if (name === 'email') {
      setAddStudent({ ...addStudent, email: value })
    }

  }
  
  useEffect(()=>{
    const fetctData=async()=>{
      try {
        const res= await getStudentOne(id)
        console.log(res.data)
        
      } catch (err) {
        console.log(err)
        
      }
    }
    fetctData()


  },[id])

  return (
    <div className='shadow w-100 d-flex justify-content-center align-item-center '   >


      <Form className='shadow p-3 bg-body rounded'  style={{ width: '100vh' }}>
        <h1 style={{ textAlign: 'center' }}>Edit Student List</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='studentname' onChange={(e) => { getdata(e) }} placeholder="Enter your name" required={true} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="date" name='dob' onChange={(e) => { getdata(e) }} required={true} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Class</Form.Label>
          <Form.Control type="text" name='course' onChange={(e) => { getdata(e) }} placeholder="Enter your class" required={true} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" name='address' onChange={(e) => { getdata(e) }} required={true} placeholder="Enter your address..." rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='email' onChange={(e) => { getdata(e) }} placeholder="name@example.com" required={true} />
        </Form.Group>

        <div className='text-center  '>
          <Button variant="primary" >Update</Button> &nbsp; &nbsp;
          <Link to={'/dashboard'}>
            <button className='btn btn-light ' >Cancel</button>
          </Link>
        </div>

      </Form>
    </div>
  )
}

export default StudentEdit
