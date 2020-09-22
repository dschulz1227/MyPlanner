import React from 'react';
import {Col, Row} from 'reactstrap';

function NavBar() {
    return (
        <div>
                      
            <Row  id="navWrapper">
                <Col className="navLinks" md="6" sm="6" href="www.google.com"> Home</Col>
                <Col className="navLinks" md="6" sm="6" href="/"> Profile</Col>
            </Row>
            
        </div>
    )
}

export default NavBar
