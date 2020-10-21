import React from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const {email, password} = this.state
        Axios
            .post('http://localhost:5000/api/auth', {
            email: email,
            password: password
        })
            .then(response => {
                console.log(response.data)
                localStorage.setItem('token', JSON.stringify(response.data));

                window.location.href = 'http://localhost:3000/CreateTask';
            })
            .catch(error => {
                alert("Unable to find this user!")
                console.log("Oops! something went wrong, check your credentials and try again.", error);
            });
    }
    render() {
        return (
           
                <card className="input" onSubmit={this.handleSubmit}>
                    <div id="loginTitle">
                        <strong>Log In</strong>
                    </div>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required/>
                    <div
                        style={{
                        marginTop: "15px",
                        display:"grid",
                        justifyContent:"center"
                    }}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required/>
                    </div>
                    
                        
                           
                                <Button id="loginButtons" variant="outlined" color="primary" className="submit" onClick={this.handleSubmit} type="submit">Enter</Button>
                            
                        
                    
                </card>
          
        )
    }
}
export default LoginForm