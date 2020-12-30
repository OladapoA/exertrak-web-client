import React, { useState, useEffect } from "react";
import User from "../components/User"
import Example from "../components/Example"

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
            <h1>USERS</h1>
            <div>
                {(users.length > 0) &&
                    users.map(user => <User key={user.user_id} user={user} />)
                }
            </div>
            <Example/>
            <>
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default Users;