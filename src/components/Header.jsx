import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>




            <Navbar expand="lg" className="bg-body-primary" style={{backgroundColor:'#457b9d'}}>
                <Container>
                    <Navbar.Brand  >
                        {/* <Link to={'/'} className='text-decoration-none text-dark'> */}
                        <i class="fa-solid fa-child fa-xl " style={{ color: 'black'}}></i>

                        Student Management
                        {/* </Link> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='btn border border-dark me-3' style={{ color: 'white' }}>
                                {/* <Link to={'/wishlist'}  style={{textDecoration:'none'}}> */}
                                Department

                                {/* </Link> */}

                            </Nav.Link>
                            <Nav.Link className='btn border border-dark' style={{ color: 'white' }}>
                                {/* <Link to={'/cart'} style={{textDecoration:'none'}}> */}
                                Courses
                                {/* </Link> */}
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    

        </>
    )
}

export default Header
