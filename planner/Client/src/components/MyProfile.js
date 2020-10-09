import React, {Component} from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap'
import EditProfile from './EditProfile';

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
        return (
            <div>
                <button onClick={() => ('/EditProfile')} component={EditProfile} user={this.props.user}>
                    this is whack
                </button>
                <div
                    className="row"
                    style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center"
                    
                }}>
                    <div
                        className="col-md-6 col-sm-6 col-lg-6"
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "blue",
                        backgroundColor: "white",
                        position: "absolute",
                        marginTop: "50px",
                        overflow:"scroll",
                        border: "6px antiquewhite solid",
                        borderRadius:"10px",
                        height:"60%",
                        alignItems:"center"
                        
                    }}>

                        <div className="row" style={{border:" 1px black dotted", padding:"30px"}}>Profile Image</div>
                        <ul style={{listStyle:"none"}}>
                            <div className="row"> <div className="col" style={{fontWeight:"bolder"}}>Name:</div>{this.props.user.name}</div>
                            <div className="row"> <div className="col" style={{fontWeight:"bolder"}}>Email:</div>{this.props.user.email}</div>
                            <div className="row"> <div className="col" style={{fontWeight:"bolder"}}>Occupation:</div>{this.props.user.occupation}</div>
                            <div className="row"> <div className="col" style={{fontWeight:"bolder"}}>Age:</div>{this.props.user.age}</div>
                            <div className="row"> <div className="col" style={{fontWeight:"bolder"}}>GitHub:</div>{this.props.user.github}</div>
                            <div className="row"> <div className="col" style={{fontWeight:"bolder"}}>Bio:</div>{this.props.user.bio}</div>
                        </ul>
                    </div>
                    <div
                        className="col-6"
                        style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        color: "red",
                        maxWidth: "300px",
                        textAlign: "left",
                        flexDirection: "column"
                    }}></div>
                </div>
                </div>
        )
    }
}

export default MyProfile;
