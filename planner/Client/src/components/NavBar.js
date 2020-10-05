import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { Navbar, Nav , Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory as createHistory } from "history";

// const history = createHistory();

export default function myNavBar(props) {
    return (
        <Nav style={{display:"flex" , justifyContent:"center"}}>
            { props.user &&
                <Row>
                    <Col>
                        <Link style={{ color: "red" }} to="/CreateTask">Home</Link>
                    </Col>
                    <Col>
                        <Link style={{fontSize:"50px"}} to="/profile">Profile</Link>
                    </Col>
                    <Col>
                        <Link to="/cards">All Tasks</Link>
                    </Col>
                </Row>
            }
        </Nav>
        

        
    )
}
