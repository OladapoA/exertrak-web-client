import React, { useState, useEffect } from "react";
import Routine from "../../components/Routine";
import Exercise from "../../components/Exercise";
import "./UserSingle.css"

function UserSingle({match}) {

    useEffect(() => {
        fetchItems();
    },[])

    const [user, setUser] = useState({});
    const [routines, setRoutines] = useState([]);
    const [exercises, setExercises] = useState([]);

    const fetchItems = async () => {
        const user = await fetch(`/api/v1/users/${match.params.id}`);
        const routines = await fetch(`/api/v1/users/${match.params.id}/routines`);
        const exercises = await fetch(`/api/v1/users/${match.params.id}/exercises`);

        const userData = await user.json();
        const routinesData = await routines.json();
        const exercisesData = await exercises.json();

        console.log(routinesData)
        console.log(exercisesData)

        setUser(userData);
        setRoutines(routinesData);
        setExercises(exercisesData);

    }
    
    return(
        <div className="user-page">
            <h1>{`Name: ${user.first_name} ${user.last_name}`}</h1>
            <h2 className="item-name">Routines</h2>
            <h2 className="item-name">Exercises</h2>
            <div className="user-item">
                {(routines.length > 0) && 
                    routines.map(routine => <Routine key={routine.routine_id} routine={routine} />)
                }
            </div>
            <div className="user-item">
                {(exercises.length > 0) && 
                    exercises.map(exercise => <Exercise key={exercise.exercise_id} exercise={exercise} />)
                }
            </div>
        </div>
    )
}

export default UserSingle;