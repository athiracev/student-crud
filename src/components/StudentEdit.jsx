import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { updateStudent } from '../services/allApi'
import Button from 'react-bootstrap/Button';





function StudentEdit() {


  const [addStudent, setAddStudent] = useState({
    studentname: '',
    dob: '', // or any default value for date of birth
    course: '',
    address: '',
    email: ''
  });
  const { id } = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== undefined && id !== '') { }
    fetchData(id)

  }, [id])

  const fetchData = async (id) => {
    try {
      console.log('inside fun')
      const res = await updateStudent(id);
      // Assuming res.data contains student data
      const { studentname, dob, course, address, email } = res.data;
      setAddStudent({
        studentname,
        dob: new Date(dob).toISOString().split('T')[0], // format the date properly
        course,
        address,
        email
      });
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  }



  const getdata = (e) => {

    const { name, value } = e.target
    // console.log(name, value)
    setAddStudent({ ...addStudent, [name]: value })
  }


  

  return (
    <div className='shadow w-100 d-flex justify-content-center align-item-center'   >
      <Form className='shadow p-3 bg-body rounded' style={{ width: '100vh' }}>
        <h1 style={{ textAlign: 'center' }}>Update Student List</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='studentname' onChange={(e) => { getdata(e) }} placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="date" name='dob' onChange={(e) => { getdata(e) }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Class</Form.Label>
          <Form.Control type="text" name='course' onChange={(e) => { getdata(e) }} placeholder="Enter your class" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" name='address' onChange={(e) => { getdata(e) }} placeholder="Enter your address..." rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='email' onChange={(e) => { getdata(e) }} placeholder="name@example.com" />
        </Form.Group>

        <div className='text-center'>
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
