import React from 'react';
import {Col, Row} from 'reactstrap';

function NavBar() {
    return (
        <div>
                      
            <Row  id="navContainer">
                <Col md="6" sm="6" href="/">Home</Col>
                <Col md="6" sm="6" href="/">Profile</Col>
            </Row>
            
        </div>
    )
}

export default NavBar
