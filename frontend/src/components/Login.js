import React, {Fragment} from 'react';
import {Container, Row, Col, Form, Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <Fragment>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={6} md={8} sm={12}>
                        <Card className="px-4 py-4 mt-5">
                            <h3 className="text-center">User Registration</h3>
                            <Form>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label htmlFor="email">Email address</Form.Label>
                                    <Form.Control type="email" name="email" id="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                    <Form.Control type="password" name="password" id="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="success" className="btn-sm" type="submit">
                                    Login
                                </Button>
                                <Form.Group className="my-3" controlId="formBasicPassword">
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