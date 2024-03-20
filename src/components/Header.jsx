import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar expand="lg" className="w-100 bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">STUDENT LIST</Navbar.Brand>
                   
                </Container>
            </Navbar>
        </>
    )
}

export default Header
