import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='d-flex  justify-content-between bg-dark text-info p-5' >
        <div className='w-25 '>
          <h3 style={{color:'white'}}>Student Management</h3>
          <p className='mt-3 ' style={{color:'white',textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae qui enim earum soluta ex nesciunt, expedita ducimus eos,
            corporis itaque similique, nulla molestiae
            minima laudantium unde sint sit esse ratione!</p>
        </div>
        <div className="w-25  " style={{marginLeft:'100px'}}>
          <h3 style={{color:'white'}}>Options</h3>
          <Link className='d-block mt-3 ' style={{ textDecoration: 'none' ,color:'white'}}>Departments</Link>
          <Link className='d-block mt-2' style={{ textDecoration: 'none',color:'white' }}>Courses</Link>
          <Link className='d-block mt-2' style={{ textDecoration: 'none',color:'white' }}>About</Link>
          {/* <Link className='d-block mt-2 ' style={{ textDecoration: 'none' }}>Contact</Link> */}

        </div>
        <div className="w-25">
          <h3 style={{color:'white'}}>References</h3>
          <a href="https://react.dev/" className='d-block mt-3 ' style={{ textDecoration: 'none' }}>React</a>
          <a href="https://react-redux.js.org/"  className='d-block mt-2' style={{ textDecoration: 'none' }}>Redux</a>
          <a href="https://react-bootstrap.github.io/"  className='d-block mt-2' style={{ textDecoration: 'none' }}>React Bootstrap</a>
        </div>
        <div className="w-25">
<h3 style={{color:'white'}}>Contact</h3>
<p style={{color:'white'}}>Sumbit your email,so we can contact you </p>
<input type="text" className='form-control'  placeholder='name@gmail.com'/>
<button className='btn btn-outline-light mt-3 '>Submit</button>
        </div>



      </div>
      <h6 className='text-center'>Student Management 2024 &copy; All Right Reserved</h6>


    </>
  )
}

export default Footer
