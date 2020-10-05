import React, {useState, useCallback} from 'react';
import Axios from 'axios';

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

        <div className="profile">
            {/* <Navigation handleLogout={props.handleLogout}/> */}
            <h2> Profile</h2>

            <ul style={{flexDirection:"column"}}>
                <li>Name</li>
                <li>Email</li>
                <li>Occupation</li>
                <li>Age</li>
            </ul>
            
        </div>

    )
}

export default ProfilePage
