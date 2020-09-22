import React, {Component, useState} from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm';
import NavBar from './NavBar'


function LandingPage() {


  

 
  // componentDidMount(){
  //   this.getAllData()

  // }

  //  getAllData =() => {
  //   axios.
  //         get('http://localhost:5000/api/users/')
  //         .then((res) => {
  //         const userData = res.data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  // })}



    return (
      <Container>

<h1 style={{paddingTop: "50px"}}>Pland</h1>
            
        </Container>
    );
}


export default LandingPage;