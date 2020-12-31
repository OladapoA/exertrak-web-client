import React, { useState, useEffect } from "react";
import User from "../components/User"
import CreateUser from "../components/CreateUser"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Users({match}) {

    useEffect(() => {
        fetchItems();
    },[])

    const [users, setUsers] = useState({});

    const fetchItems = async () => {
        const users = await fetch("/api/v1/users");

        const usersData = await users.json()
        setUsers(usersData);

    }

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <div>
            <h1>Users</h1>
            <div>
                {(users.length > 0) &&
                    users.map(user => <User key={user.user_id} user={user} />)
                }
            </div>
            <CreateUser />
        </div>
    )
}

export default Users;