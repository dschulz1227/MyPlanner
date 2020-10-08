import React, { Component } from 'react';
import axios from 'axios';

class MyProfile extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            responseData: ''
        }
    }

    componentDidMount() {
        console.log('it works' , this.responseData)
        {this.getUserProfile()}
    }

    //get entire collection
    getUserProfile = (name) => {
        console.log('yeay it works', name)


        axios.get(`http://localhost:5000/api/users/getUserById/${this.props.user._id}`)
            .then(res => {
                // console.log('you will see me', res.data)
                console.log('user details', res)
                this.setState({responseData: res.data})
            })
    }
    render() {

        return (
            <div
                className="profile"
                style={{
                display: "grid",
                justifyContent: "center"
            }}>
                <div style={{
                    color: "yellowgreen"
                }}>Profile</div>
                <div>
                    <ul
                        id="profileList"
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        listStyle: "none",
                        justifyContent: "flex-start"
                    }}>
                        <li>Name: {this.responseData}</li>
                        <li>Email:{this.responseData}</li>
                        <li>Occupation:</li>
                        <li>Age:
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MyProfile;
