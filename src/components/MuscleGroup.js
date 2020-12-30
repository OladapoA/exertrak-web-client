import React from "react";
import { Link } from "react-router-dom"
import "./MuscleGroup.css"

function MuscleGroup(props) {
    const muscleGroup = props.muscleGroup;
    return(
        <div className="muscle-group">
            <h2>{muscleGroup.major_name}</h2>
            <p>{`Number of Exercises: ${muscleGroup.no_of_exercises}`}</p>
            {muscleGroup.no_of_exercises > 0 &&
            <Link to={`/muscle_groups/${muscleGroup.muscle_group_id}/exercises`}>
                <button>GO</button>
            </Link>}
        </div>
    )
}

export default MuscleGroup;