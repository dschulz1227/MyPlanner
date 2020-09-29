import React from 'react';
import { Col, Row, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
export default function NavBar(props) {
    return (
        <Nav style={{color:"white"}}>
            { props.user &&
                <Row>
                    <Col>
                        <Link style={{ color: "red" }} to="/CreateTask">Home</Link>
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