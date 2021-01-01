import React, {useState} from 'react';
import { Button, Modal, Col, Row, Form } from 'react-bootstrap';
import MuscleGroupButton from "./MuscleGroupButton";
import "./CreateExerciseModal.css"

function CreateExerciseModal() {

    const [muscleGroups, setmuscleGroups] = useState([]);
    const [show, setShow] = useState(false);

    const [exercise, setExercise] = useState({
        name: "",
        description: "",
        muscleGroupIds: []
    });

    function handleChange(event) {
        const { name, value, type } = event.target;
        // console.log(name, value)

        if (type === "checkbox") {
            setExercise(prevExercise => {
                const newMuscleGroupsIds = prevExercise.muscleGroupIds
                newMuscleGroupsIds[value] = event.currentTarget.checked
                return {
                    ...prevExercise,
                    muscleGroupIds: newMuscleGroupsIds
                };
            });
        } else {
            setExercise(prevExercise => {
                return {
                    ...prevExercise,
                    [name]: value
                };
            });
        }        
    }

    const fetchItems = async () => {
        const muscleGroups = await fetch(`/api/v1/muscle_groups`);
        const muscleGroupsData = await muscleGroups.json();
        setmuscleGroups(muscleGroupsData);

        const muscleGroupDataIds = []
        muscleGroupsData.forEach((muscleGroup) => {
            const id = muscleGroup.muscle_group_id;
            muscleGroupDataIds[id] = false;
        })

        setExercise(prevExercise => {
            return {
                ...prevExercise,
                muscleGroupIds: muscleGroupDataIds
            };
        });
        // console.log(exercise);
    }
  
    const handleClose = () => {
        setShow(false);
        setExercise({
            name: "",
            description: "",
            muscleGroupIds: []
        });
    };
    const handleShow = () => {
        setShow(true);
        fetchItems();
    };

    const handleCreate = () => {
        // console.log(exercise);

        const testExercise = {
            "name": "New Exercise",
            "description": "New Exercise description",
            "muscle_groups": [
                {
                    "muscle_group_id": 1,
                    "major_name": "Quadriceps",
                    "minor_name": null
                },
                {
                    "muscle_group_id": 2,
                    "major_name": "Hamstrings",
                    "minor_name": null
                },
                {
                    "muscle_group_id": 3,
                    "major_name": "Calves",
                    "minor_name": null
                }
            ]
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(testExercise)
            body: JSON.stringify(exercise)
        };
        fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        
        // fetch('/api/v1/users/1/exercises', requestOptions)
        //     .then(response => response.json())
        //     .then(data => console.log(data));

        handleClose();
    }
  
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create a new exercise
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>New ExerTrak exercise</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextName">
                            <Form.Label column sm="3">
                                Name:
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control name="name" value={exercise.name} placeholder="Enter name of exercise" onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextDescription">
                            <Form.Label column sm="3">
                                Description:
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control name="description" value={exercise.description} placeholder="Enter exercise description" onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="3">
                                Muscle groups:
                            </Form.Label>
                            <Col sm="9">
                                {/* {(muscleGroups.length > 0) && <MuscleGroupButton muscleGroup={muscleGroups[0]} handleChange={handleChange} />} */}
                                {(muscleGroups.length > 0) && 
                                    muscleGroups.map(muscleGroup => <MuscleGroupButton 
                                                                        key={muscleGroup.muscle_group_id} 
                                                                        muscleGroup={muscleGroup} 
                                                                        handleChange={handleChange} />)}
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCreate}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
  
export default CreateExerciseModal;