import React, {Component} from 'react';
import Axios from 'axios';

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
                    <div>
                        <h5>New User</h5>
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
                            <button onClick={this.addUser} className="submit" type="submit">Create</button>
                        </span>

                    </div>
                </form>
            </div>
        )
    }

}