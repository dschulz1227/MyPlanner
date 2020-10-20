import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Row, Col} from 'react-bootstrap';

export default function myNavBar(props) {
    return (
        <Nav className="myBodyFont"
            style={{
            display: "flex",
            justifyContent: "center"
        }}>
            {props.user && <Row>
                <Col>
                    <Link to="/CreateTask">Home</Link>
                </Col>
                <Col>
                    <Link to="/profile">Profile</Link>
                </Col>
                <Col>
                    <Link to="/cards">All Tasks</Link>
                </Col>
            </Row>
}
        </Nav>

    )
}
