import React from 'react';
import RegistrationForm from './RegisterForm'
import LoginForm from './LoginForm'

const HomePage = props => {

    const handleSuccessfulAuth = e => {
        e.preventDefault();
    }

    return (
        <div>
            <div
                className="row"
                style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "65px",
                fontFamily:"lato"                
            }}>
                <div className="homeForms">
                    <LoginForm
                        className="col-6 "
                        setCookieApp={props.setCookieApp}
                        handleLogin={props.handleLogin}/></div>
                <div className="homeForms">
                    <RegistrationForm
                        className="col-6 "
                        handleSuccessfulAuth={handleSuccessfulAuth}/></div>
            </div>
        </div>
    )
};

export default HomePage;