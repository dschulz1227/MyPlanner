import React from 'react';
import {Col, Row, Nav} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core'



export default function NavBar(props) {



    console.log('NavBar', props);
    return (
        <Nav>
            <Row>
                <Col>
                    <Link style={{color:"red"}}to="/CreateTask">Home</Link>
                </Col>
                <Col>
                    <Link to="/profile">Profile</Link>
                </Col>
                <Col>
                    <Link to="/cards">Tasks</Link>
                </Col>
            </Row>
            <Row style={{display:"flex", justifyContent:"flex-end"}}>
                
            </Row>
        </Nav>
    )
}