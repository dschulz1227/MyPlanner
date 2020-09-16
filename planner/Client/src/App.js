import React from 'react'
import './App.css';
import axios from 'axios'; 
import LandingPage from './components/LandingPage';
import { Container , Col, Row } from 'reactstrap';
import RegistrationForm from './components/RegisterForm';
import TaskCard from './components/TaskCard';

function App () {


    const userData = 'http://localhost:5000/api/users/';

    // getAllData = () => {
    // axios
    //     .get(userData)
    //     .then((res) => {
    //         console.log(res.data
    //     )
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }
        
    return (
            <Container fluid>
                <LandingPage/>
                <RegistrationForm/>
                <TaskCard/>
                    
                
            </Container>
        )
}


export default App
