import React, {useState, useCallback, useEffect} from 'react';
import Axios from 'axios';

function ProfilePage(props) {

    let [responseData,
        setResponseData] = useState('');

    const fetchData = useCallback(() => {
        Axios({
            "method": "get",
            "url": "http://localhost:5000/api/tasks/getUserById" + props.userId
        }).then((response) => {
            setResponseData(response.data)
            console.log(response.data, props)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

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
                <ul id="profileList"
                    style={{
                    display: "flex",
                    flexDirection: "column",
                    listStyle: "none",
                    justifyContent: "flex-start"
                }}>
                    <li>Name: {responseData.name}</li>
                    <li>Email:{responseData.email}</li>
                    <li>Occupation:</li>
                    <li>Age:
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfilePage
