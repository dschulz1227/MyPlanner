import React, {Component} from 'react';
import axios from 'axios';

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            occupation: '',
            age: '',
            github: '',
            bio: ''
        }
    }

    render() {

        const updateProfile = () => {
            axios.put('http://localhost:5000/api/user/${this.props.user._id}', {
                "id": this.props.user._id,
                "name": this.props.user.name,
                "email": this.props.user.email,
                "occupation": this.props.user.occupation,
                "age": this.props.user.age,
                "github": this.props.user.github,
                "bio": this.props.user.bio
            })
        }

        return (
            <div
                className="profile"
                style={{
                display: "grid",
                justifyContent: "center"
            }}>
                <div
                    style={{
                    color: "yellowgreen",
                    borderStyle: " solid",
                    borderColor: "red",
                    width: "500px",
                    height: "100vh",
                    justifyContent: "center",
                    display: "grid",
                    fontSize: "45px",
                    marginTop: "50px",
                    backgroundColor: "whitesmoke",
                    opacity: ".5"
                }}>Profile
                    <div>
                        <ul
                            id="profileList"
                            style={{
                            display: "flex",
                            flexDirection: "column",
                            listStyle: "none",
                            justifyContent: "flex-start",
                            fontSize: "20px",
                            border: "1px solid black"
                        }}>
                            <li>Name: {this.props.user.name}</li>
                            <li>Email:{this.props.user.email}</li>
                            <li>Occupation:{this.props.user.email}</li>
                            <li>Age: {this.props.user.age}</li>
                            <li>Github: {this.props.user.github}</li>
                            <li>Bio: {this.props.user.bio}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProfile;
