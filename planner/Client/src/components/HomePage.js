import React, {useState} from 'react';
import RegistrationForm from './RegisterForm'
import LoginForm from './LoginForm'


const HomePage = props => {

  const handleSuccessfulAuth = e => {
    e.preventDefault();
  }

  return (
    <div>
      <div>
        <LoginForm setCookieApp={props.setCookieApp} handleLogin={props.handleLogin}/>
      </div>
      <div>
        <RegistrationForm handleSuccessfulAuth={handleSuccessfulAuth}/>
      </div>
    </div>
  )
};

export default HomePage;