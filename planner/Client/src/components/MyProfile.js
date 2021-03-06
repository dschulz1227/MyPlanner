import React, {Component} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
// import {Form, Button} from 'react-bootstrap'
// import EditProfile from './EditProfile';
import Button from '@material-ui/core/Button';


class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{}
        }
        console.log(props)
    }

    componentDidMount() {
        console.log(this.state.cards)
        this.getCollection('All')
    }

    //get entire collection
    getCollection = (name) => {
        axios
            .get(`http://localhost:5000/api/users/getByUserId/${this.props.user._id}`)
            .then(res => {
                // console.log('you will see me', res.data)
                console.log('card details', res.data)
                this.setState({data: res.data})
            })
    }


    clickHandler = e => {
        this
            .props
            .history
            .push('/EditProfile')
    }

    render() {
        return (
            <div>
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
                        backgroundColor: "white",
                        position: "absolute",
                        marginTop: "50px",
                        overflow: "scroll",
                        border: "2px antiquewhite solid",
                        borderRadius: "15px",
                        height: "60%",
                        alignItems: "center"
                    }}>

                        <div
                            className="row"
                            style={{
                            border: " 1px black dotted",
                            padding: "100px"
                        }}>Profile Image</div>

                        <ul
                            style={{
                            listStyle: "none",
                            marginLeft: "10px"
                        }}>
                            <div className="row">
                                <strong
                                    style={{
                                    marginRight: "10px"
                                }}>Name:</strong><div style={{fontWeight:"lighter"}}>{this.state.data.name}</div></div>
                            <div className="row">
                                <strong
                                    style={{
                                    marginRight: "10px"
                                }}>Email:</strong><div style={{fontWeight:"lighter"}}>{this.state.data.email}</div></div>
                            <div className="row">
                                <strong
                                    style={{
                                    marginRight: "10px"
                                }}>Occupation:</strong><div style={{fontWeight:"lighter"}}>{this.state.data.occupation}</div></div>
                            <div className="row">
                                <strong
                                    style={{
                                    marginRight: "10px"
                                }}>Age:</strong><div style={{fontWeight:"lighter"}}>{this.state.data.age}</div></div>
                            <div className="row">
                                <strong
                                    style={{
                                    marginRight: "10px"
                                }}>GitHub:</strong><div style={{fontWeight:"lighter"}}>{this.state.data.github}</div></div>
                            <div className="row">
                                <strong
                                    style={{
                                    marginRight: "10px"
                                }}>Bio:</strong> <div style={{fontWeight:"lighter"}}>{this.state.data.bio}</div></div>
                        </ul>
 
                    </div>

                    <div className="row">
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={this.clickHandler}
                                component={this.EditProfile}
                                user={this.props.user}>
                                Edit Info
                            </Button>
                        </div>
                </div>

            </div>
        )
    }
}

export default MyProfile;
