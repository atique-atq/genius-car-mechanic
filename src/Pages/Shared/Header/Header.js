import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Genius Car Mechanic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#services">Services </Nav.Link>
                        <Nav.Link as={Link} to="/home#experts">Experts</Nav.Link>
                       {user.email ?
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>:
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName && { user.displayName }}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
        </>
    );
};

export default Header;