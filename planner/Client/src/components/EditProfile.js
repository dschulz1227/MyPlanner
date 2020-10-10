import React, {Component} from 'react';
import axios from 'axios';

export class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.handleChange = this
            .handleChange
            .bind(this);
    }

    addUserDetails = event => {
        event.preventDefault();
        const {occupation, age, github, bio} = this.state
        axios
            .post(`http://localhost:5000/api/users/addUserDetails/${this.props.user._id}`, 
            {
            occupation: occupation,
            age: age,
            github: github,
            bio: bio
        })
            .then(response => {
                alert('Profile Updated!')
                console.log(response)
                if (response.data.status === "updated") {
                    this
                        .props
                        .handleSuccessfulAuth(response.data);
                }
            })

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>               
                <form>
                    <div style={{
                        marginTop: "3px"
                    }}>
                        <input
                            type="text"
                            name="occupation"
                            placeholder="What is your job?"
                            value={this.state.occupation}
                            onChange={this.handleChange}
                            required/>
                    </div>

                    <div style={{
                        marginTop: "3px"
                    }}>
                        <input
                            type="text"
                            name="age"
                            placeholder="Enter your age"
                            value={this.state.age}
                            onChange={this.handleChange}
                            required/>
                    </div>
                    <div style={{
                        marginTop: "3px"
                    }}>
                        <input
                            type="text"
                            name="github"
                            placeholder="GitHub Account"
                            value={this.state.github}
                            onChange={this.handleChange}
                            required/>
                    </div>
                    <div style={{
                        marginTop: "3px"
                    }}>
                        <input
                            type="text"
                            name="bio"
                            placeholder="Add a Bio"
                            value={this.state.bio}
                            onChange={this.handleChange}
                            required/>
                    </div>
                    <span>
                        <button onClick={this.addUserDetails} className="submit" type="submit">Update Profile</button>
                    </span>
                </form>
            </div>
        )
    }

}

export default EditProfile