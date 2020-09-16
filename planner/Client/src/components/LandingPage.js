import React, {Component, useState} from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'


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
        {/* <Row>
          <RegisterForm/>
          <LoginForm/>
        </Row> */}
          
            <Row>
            <Col md="2" sm="3">Kennedy</Col>
             <Col md="8" sm="5" id="planner-text">Grace</Col>
            <Col md="2" sm="3">Schulz</Col>
            </Row>
            
        </Container>
    );
}


export default LandingPage;