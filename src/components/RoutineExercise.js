import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./RoutineExercise.css"

function RoutineExercise(props) {
    const {exercise: {muscle_groups, name, description}, reps, rep_break, sets, set_break, time} = props.routineExercise;

    if (name === "Rest") {
        return(
            <div className="routine-exercise">
                <h2>{name}</h2>
                <p>{`Rest for ${time}`}</p>
                {(muscle_groups.length > 0) &&
                    muscle_groups.map((muscle_group) => <span className="muscle-group-name" key={uuidv4()}>{muscle_group.major_name}</span>)}
            </div>
        )
    }

    return(
        <div className="routine-exercise">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{`${reps} Reps with ${rep_break} break between reps`}</p>
            <p>{`${sets} Sets with ${set_break} break between sets`}</p>
            {(muscle_groups.length > 0) &&
                muscle_groups.map((muscle_group) => <span className="muscle-group-name" key={uuidv4()}>{muscle_group.major_name}</span>)}
        </div>
    )
}

export default RoutineExercise;