import React from 'react'
import './App.css';
import axios from 'axios'; 
import LandingPage from './components/LandingPage';
import { Container , Col, Row } from 'reactstrap';


function App() {

    const getData = 'http://localhost:5000/api/users/';

    axios
        .get(getData)
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
        return (
            <Container fluid>
                <LandingPage/>
                    
                
            </Container>
        )
}

export default App;
