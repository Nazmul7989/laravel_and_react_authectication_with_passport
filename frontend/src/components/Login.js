import React, {Fragment, useState} from 'react';
import {Container, Row, Col, Form, Button, Card} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    //validation error
    const [error,setError] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    //clear form
    const clearForm = ()=>{
        setEmail("")
        setPassword("")
        setError([]);
    }

    //redirect to dashboard page
    const navigate = useNavigate();


    const onclickHandler = async (e)=>{
        e.preventDefault();

        let  formData = new FormData();

        formData.append('email',email);
        formData.append('password',password);

        const res = await axios.post('http://127.0.0.1:8000/api/login',formData);

        if (res.data.status == true){

            localStorage.setItem('access_token',res.data.access_token);
            localStorage.setItem('user',JSON.stringify(res.data.user));

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
            })

            Toast.fire({
                icon: 'success',
                title: 'Yoy have logged in successfully'
            })

            navigate('/dashboard')
            clearForm();
            setErrorMessage('');

        }else {

            if (res.data.validationError){
                setError(res.data.validationError);
                setErrorMessage('');
            }

            if (res.data.message){
                setErrorMessage(res.data.message);
                setError([]);
            }
        }
    }


    return (
        <Fragment>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={6} md={8} sm={12}>
                        <Card className="px-4 py-4 mt-5">
                            <h3 className="text-center">User Login</h3>
                            <Form method="post">
                                { errorMessage? (
                                    <div className="alert alert-danger">
                                        { errorMessage}
                                    </div>
                                ): ''}

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

                                <Button variant="success" onClick={onclickHandler} className="btn-sm" type="button">
                                    Login
                                </Button>
                                <Form.Group className="my-3">
                                    <small>Don't have an Account? <Link to="/register">Register Here</Link></small>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Login;