import React from 'react';
import RegistrationForm from './RegisterForm'
import LoginForm from './LoginForm'

const HomePage = props => {

const handleSuccessfulAuth = e => {
  e.preventDefault();
}

  return (
    <div>
      <div className="row" style={{display:"flex" , justifyContent:"space-evenly" , marginTop:"65px"}}>
        <LoginForm className="col-6" id="LoginForm" style={{color:"purple"}}  setCookieApp={props.setCookieApp} handleLogin={props.handleLogin}/>
        <RegistrationForm className="col-6" id="RegistrationForm" handleSuccessfulAuth={handleSuccessfulAuth}/>
      </div>
    </div>
  )
};

export default HomePage;