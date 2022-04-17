import React, {Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";

const Dashboard = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h3>Welcome to Dashboard</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis consequuntur debitis dolore dolores ducimus itaque neque, nostrum pariatur possimus quisquam quod repudiandae, ullam vero. Distinctio doloremque neque voluptas.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Dashboard;