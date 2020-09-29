import React, {useState, useEffect, useCallback, Component} from 'react';
import {Form, Col, Row, Button} from 'reactstrap';
import Axios from 'axios';
import Cards from './Cards'

function ProfilePage(props) {

    let [responseData,
        setResponseData] = useState('');
    const fetchData = useCallback(() => {


        Axios
            .get("http://localhost:5000/api/users/" + props.user._id)
            .then((response) => {
                setResponseData(response.data)
                console.log(responseData)
            })
            .catch((error) => {
                console.log(error)
            })
    })
    

    return (

        <div className="Profile">
            {/* <Navigation handleLogout={props.handleLogout}/> */}
            <h2 className="text-center">Profile</h2>
            <div
                className="container dark-red1"
                style={{
                marginTop: "50px"
            }}>
                
            </div>
        </div>

    )
}

export default ProfilePage
