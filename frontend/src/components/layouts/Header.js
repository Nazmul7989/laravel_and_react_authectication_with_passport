import React, {Fragment, useEffect, useState} from 'react';
import {Container,Navbar,Nav,NavDropdown} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'

const Header = () => {

    const access_token = localStorage.getItem('access_token');
    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData);
    const [userName,setUserName] = useState('');

    useEffect(function (){
        if (user){
            setUserName(user.name);
        }
    })
    const navigate = useNavigate();

    const logoutHandler=(e)=>{
        e.preventDefault();

        localStorage.removeItem('access_token');
        localStorage.removeItem('user');

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
        })
        Toast.fire({
            icon: 'success',
            title: 'You have logged out successfully'
        })

        navigate('/');



    }

    return (
        <Fragment>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            { access_token != null ?
                                (
                                    <NavDropdown title={userName} id="basic-nav-dropdown">
                                        <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <>
                                        <Link to="/login" className="nav-link">Login</Link>
                                        <Link to="/register" className="nav-link">Register</Link>
                                    </>
                                )
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Fragment>
    );
};

export default Header;