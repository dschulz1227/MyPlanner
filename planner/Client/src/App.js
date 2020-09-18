import React from 'react'
import './App.css';
import axios from 'axios'; 
import { Container , Col, Row } from 'reactstrap';

import RegistrationForm from './components/RegisterForm';
import TaskCard from './components/TaskCard';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Cards from './components/Cards'

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
                <NavBar/>
                <LandingPage/>
                <RegistrationForm/>
                <TaskCard/>
                <Cards />
                    
                
            </Container>
        )
}


export default App
