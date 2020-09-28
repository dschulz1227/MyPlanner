import React from 'react';
import {Col, Row, Nav} from 'reactstrap';


import {Link} from 'react-router-dom';

export default function NavBar(props) {

    return (
        <Nav>
            <Row>
                <Col>
                    <Link style={{color:"red"}}to="/">Home</Link>
                </Col>
                <Col>
                    <Link to="/profile">Profile</Link>
                </Col>
            </Row>
        </Nav>

    )
}
