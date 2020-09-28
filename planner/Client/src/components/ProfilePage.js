import React, {useState, useEffect, useCallback} from 'react';
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
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    })

  
    return (

        <div>
            {/* <Navigation handleLogout={props.handleLogout}/> */}
            <h2 className="text-center text-white">Profile</h2>
            <div
                className="container dark-red1"
                style={{
                marginTop: "50px"
            }}>
                <Cards/>
                <div className="row">
                    <div className="col-md-6 img">
                        {/* <img src={responseData.profileImage} alt="" class="img-rounded" /> */}
                    </div>
                    <div className="col-md-6 details">
                        <blockquote>
                            <h5>{responseData.name} {responseData.email}</h5>
                            <small>
                                <cite title="Source Title">Las Vegas, NV
                                    <i className="icon-map-marker"></i>
                                </cite>
                            </small>
                        </blockquote>
                        <p>
                            Full Name
                            <br/>
                            Github account here
                            <br/>
                            Created Account on {responseData.timeStamp}
                        </p>
                        <hr/> {/* <p>Select Profile Image </p>
                        <select className="select-board-size" onChange={setProfileImage}>
                            {images.map(value => <option key={value} value={value}>{value}</option>)}
                        </select> */}
                        <br/>
                        Note! Some images in this application may still display the previous image. Log
                        out and log back in to ensure all images are up to date.

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfilePage
