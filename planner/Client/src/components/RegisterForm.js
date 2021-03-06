import React, {Component} from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';


export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            
        }

        this.addUser = this
            .addUser
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
    }

    //handle User input

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // submit form/add user
    addUser(event) {
        event.preventDefault();
        const {email, password, name} = this.state
        Axios
            .post(`http://localhost:5000/api/users/`, {
            name: name,
            email: email,
            password: password
            
        })
            .then(response => {
                alert('registered')
                if (response.data.status === "created") {
                    this
                        .props
                        .handleSuccessfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log("Registration error", error);
            });
    }

    render() {
        return (
            <div className="registerWrap">
                <form >
                    <div id="loginTitle" style={{marginLeft:"55px"}}>
                        <strong>New User</strong>
                    </div>

                    <div style={{
                        marginTop: "3px"
                    }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required/>
                    </div>

                    <div style={{
                        marginTop: "3px"
                    }}>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required/>
                    </div>

                    <div style={{
                        marginTop: "3px"
                    }}>
                        <input
                            type="text"
                            name="password"
                            placeholder="New password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required/>
                    </div>

                    <div style={{
                        marginTop: "3px"
                    }}>

                        <span>
                            <Button id="loginButtons" variant="outlined" color="primary" onClick={this.addUser} className="submit" type="submit">Create</Button>
                        </span>

                    </div>
                </form>
            </div>
        )
    }

}