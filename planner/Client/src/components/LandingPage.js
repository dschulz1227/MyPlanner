import React, {Component} from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import RegisterForm from './RegisterForm'



export default class LandingPage extends Component {

    componentDidMount() {
    axios.
          get('http://localhost:5000/api/users/')
          .then((res) => {
          const userData = res.data;
        })
        .catch((error) => {
          console.log(error);
  })}

  render() {

    return (
      <Container>
        <Row>
          <RegisterForm/>
        </Row>
          
            <Row>
            <Col md=""></Col>
             <Col md="8" id="planner-text">Planner</Col>
            <Col md="2"></Col>
            </Row>
            
        </Container>
    )
}}


