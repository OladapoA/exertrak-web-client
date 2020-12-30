import React from 'react';
import { Link } from "react-router-dom"
import "./User.css"

function User(props) {
    const {first_name, last_name, user_id} = props.user;
    // console.log(props)

    return(
        <div className="user">
            <h2>{`Name: ${first_name} ${last_name}`}</h2>
            <span>
                <Link to={`/users/${user_id}`}><button>Go</button></Link>
            </span>
        </div>
    )
}

export default User;