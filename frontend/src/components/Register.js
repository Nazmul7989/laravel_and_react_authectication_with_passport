import React, {Fragment} from 'react';
import {Button, Col, Container, Form, Row,Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <Fragment>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={6} md={8} sm={12}>
                        <Card className="px-4 py-4 mt-5">
                            <h3 className="text-center">User Registration</h3>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label htmlFor="name">Name</Form.Label>
                                    <Form.Control type="text" name="name" id="name" placeholder="Enter Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label htmlFor="email">Email address</Form.Label>
                                    <Form.Control type="email" name="email" id="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                    <Form.Control type="password" name="password" id="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label htmlFor="password_confirmation">Confirm Password</Form.Label>
                                    <Form.Control type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" />
                                </Form.Group>

                                <Button variant="success" className="btn-sm" type="submit">
                                    Register
                                </Button>

                                <Form.Group className="my-3" controlId="formBasicPassword">
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