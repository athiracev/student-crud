import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {  getStudentOne, updateStudent } from '../services/allApi'
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify'






function StudentEdit() {

  const {id}=useParams()
  const navigate = useNavigate()
  console.log(id)
  const [addStudent, setAddStudent] = useState({
    studentname: '',
    dob: '',
    course: '',
    address: '',
    email: ''
  });


  useEffect(()=>{
    const fetctData=async()=>{
      try {
        const res= await getStudentOne(id)
        console.log(res.data)
        setAddStudent({
          ...addStudent,studentname:res.data.studentname,dob:res.data.dob,
          course:res.data.course,address:res.data.address,email:res.data.email
        })
        
      } catch (err) {
        console.log(err)
        
      }
    }
    fetctData()


  },[id])

 
const handleEdit=async()=>{
  console.log(id,addStudent)
  const res=await updateStudent(id,addStudent)
  console.log(res)
  if(res.status>=200 && res.status<300){
    toast.success('Updated Successfully')
    setTimeout(()=>{
      navigate('/dashboard')

    },1000)
  }

}

  return (
    <div className='shadow w-100 d-flex justify-content-center  '   >


      <Form className='shadow p-3 bg-body rounded'  style={{ width: '100vh' }}>
        <h1 style={{ textAlign: 'center' }}>Edit Student List</h1>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='studentname' value={addStudent.studentname} onChange={(e)=>setAddStudent({...addStudent,studentname:e.target.value})} placeholder="Enter your name" required={true} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>DOB</Form.Label>
          <Form.Control type="date" name='dob' value={addStudent.dob} onChange={(e) => { setAddStudent({...addStudent,dob:e.target.value})}} required={true} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Class</Form.Label>
          <Form.Control type="text" name='course' value={addStudent.course} onChange={(e) => setAddStudent({...addStudent,course:e.target.value})} placeholder="Enter your class" required={true} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" name='address' value={addStudent.address} onChange={(e) => setAddStudent({...addStudent,address:e.target.value})} required={true} placeholder="Enter your address..." rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='email' value={addStudent.email} onChange={(e) =>setAddStudent({...addStudent,email:e.target.value})} placeholder="name@example.com" required={true} />
        </Form.Group>

        <div className='text-center  '>
          <Button variant="primary" onClick={handleEdit} >Update</Button> &nbsp; &nbsp;
          <Link to={'/dashboard'}>
            <button className='btn btn-light ' >Cancel</button>
          </Link>
        </div>

      </Form>
    </div>
  )
}

export default StudentEdit
