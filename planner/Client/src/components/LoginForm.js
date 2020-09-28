import React from 'react';
import Axios from 'axios';

class LoginForm extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            email: "",
            password: ""
        };
        
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(event){
            this.setState({
            [event.target.name]: event.target.value   
            });
        }
        
        handleSubmit(event){
            
        event.preventDefault();
            const {email, password} = this.state

            Axios.post('http://localhost:5000/api/auth',
                {
                        email: email,
                        password: password
                }

            ) 
            .then(response => {
                console.log(response.data)
                this.props.setCookieApp(response.data.token)
                // localStorage.setItem('token', response.data.token);
                this.props.handleLogin(event)
                alert('You are logged in.')
                if (response.data.logged_in) {
                    this.props.handleSuccessfulAuth(response.data);
                  }
            })
            .catch(error =>{
                console.log("Oops! something went wrong, check your credentials and try again.", error);

            });
        }

    render() {
        return (
            <div className = "loginWrap">
                <div className = "input" style={{display:"grid", justifyContent:"center"}}>
                <form className = "input" onSubmit = {this.handleSubmit}>
                    <div>
                        <h5>Log In</h5>
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="Email" value= {this.state.email} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" value= {this.state.password} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <div>
                            <span>
                             <button className ="submit" type = "submit">Enter</button>
                            </span>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }

}

export default LoginForm