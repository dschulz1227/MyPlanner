import React, {Component, useState} from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'reactstrap';
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm';
import NavBar from './NavBar'

function HomePage() {

    return (
        <Container>
            <h1
                style={{
                paddingTop: "50px",
                justifyContent: "center",
                display: "flex"
            }}>Pland</h1>
        </Container>
    );
}

export default HomePage;