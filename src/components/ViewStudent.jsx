import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStudent,deleteStudent, editStudent } from '../services/allApi'

function ViewStudent() {
const[student,setStudent]=useState([])


useEffect(()=>{
  getData()
},[])

const getData =async ()=>{
  const res = await getStudent()
  // console.log(res.data)
  setStudent(res.data)
}
// console.log(student)

const delStudent=async(id)=>{
  console.log(id)
  const res= await deleteStudent(id)
  console.log('deleted successfully')
  getData()
}


  return (

    <div className='row'>
      <div className=" shadow col-lg-12 grid-margin stretch-card">
        <div className=" shadow card">
          <div className=" card-body">
            <h4>View Student List</h4>
            <div >
              <Link to={'/dashboard/createstu'}>
                <button type='button' className='btn btn-secondary '>Create</button>
              </Link>
            </div>
            <br /> 


            
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>


                  <tr>
                    <th> Student Name</th>
                    <th> DOB</th>
                    <th> Class</th>
                    <th> Address</th>
                    <th> Email</th>

                  </tr>
                </thead>
                <tbody>
                {student.map((stu,index)=>(
                   <tr key={index}>
                   <td>{stu.studentname}</td>
                   <td>{stu.dob}</td>
                   <td>{stu.course}</td>
                   <td>{stu.address}</td>
                   <td>{stu.email}</td>
                   <td>
                     <div className="d-flex flex-row">
                       <div className="p-2">
                         <Link to={`/dashboard/editstu${stu.id}`}>
                           <button type="button"  className="btn btn-outline-light btn-sm">
                             Edit
                           </button>
                         </Link>
                       </div>
                       <div className="p-2">
                         <button
                           type="button"
                           className="btn btn-outline-light btn-sm"
                           onClick={() => {
                             if (window.confirm('Do you want to delete ?')) {
                               delStudent(stu.id)
                             }
                           }}
                         >
                           Delete
                         </button>
                       </div>
                     </div>
                   </td>
                 </tr>
                ))}
                   
                  
                </tbody>
              </table>


            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewStudent
