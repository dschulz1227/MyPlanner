import React, {Component} from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
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
      <div>
        <div>
          <RegisterForm/>
        </div>
          
            <div>
            <Col col-md-2="true"></Col>
             <Col col-md-8="true"  style={{fontSize : "50px"}}>Landing Page</Col>
            <Col col-md-2="true"></Col>
            </div>
            
        </div>
    )
}}


