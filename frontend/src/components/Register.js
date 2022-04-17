import React, {Fragment,useState} from 'react';
import {Button, Col, Container, Form, Row,Card} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'


const Register = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [password_confirmation,setPassword_Confirmation] = useState("");

    //validation error
    const [error,setError] = useState([]);
    const navigate = useNavigate();

    //clear form
    const clearForm = ()=>{

        setName("")
        setEmail("")
        setPassword("")
        setPassword_Confirmation("")
        setError([]);
    }


    const onclickHandler = async (e)=>{
        e.preventDefault();

        let  formData = new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('password_confirmation',password_confirmation);


        const res = await axios.post('http://127.0.0.1:8000/api/register',formData);

        if (res.data.status == true){

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
            })

            Toast.fire({
                icon: 'success',
                title: 'User Registered successfully'
            })

            navigate('/login');

            clearForm()

        }else {

            setError(res.data.validationError)
        }
    }

    return (
        <Fragment>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={6} md={8} sm={12}>
                        <Card className="px-4 py-4 mt-5">
                            <h3 className="text-center">User Registration</h3>
                            <Form method="post">
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="name">Name</Form.Label>
                                    <Form.Control type="text" onChange={(e)=>{setName(e.target.value)}} name="name" id="name" value={name} placeholder="Enter Name" />
                                    <span className="text-danger">{error.name ? error.name : ''}</span>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="email">Email address</Form.Label>
                                    <Form.Control type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Enter email" />
                                    <span className="text-danger">{error.email ? error.email : ''}</span>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                    <Form.Control type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} id="password" value={password} placeholder="Password" />
                                    <span className="text-danger">{error.password ? error.password : ''}</span>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="password_confirmation">Confirm Password</Form.Label>
                                    <Form.Control type="password" name="password_confirmation" onChange={(e)=>{setPassword_Confirmation(e.target.value)}} id="password_confirmation" value={password_confirmation} placeholder="Confirm Password" />
                                </Form.Group>

                                <Button variant="success" onClick={onclickHandler} className="btn-sm" type="button">
                                    Register
                                </Button>

                                <Form.Group className="my-3">
                                   <small>Already have an Account? <Link to="/login">Login Here</Link></small>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Register;