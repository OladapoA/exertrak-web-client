import React from "react";
import { Link } from "react-router-dom"
import "./Routine.css"

function Routine(props) {
    const routine = props.routine;
    return(
        <div className="routine">
            <h2>{routine.name}</h2>
            <p>{routine.description}</p>
            <p>{`Number of Exercises: ${routine.no_of_exercises}`}</p>
            <Link to={`/routines/${routine.routine_id}/routine_exercises`}>
                <button>GO</button>
            </Link>
        </div>
    )
}

export default Routine;