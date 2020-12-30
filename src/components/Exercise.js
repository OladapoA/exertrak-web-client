import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./Exercise.css"

function Exercise(props) {
    const {muscle_groups, name, description} = props.exercise;
    // console.log(props)

    return(
        <div className="exercise">
            <h2>{name}</h2>
            <p>{description}</p>
            {(muscle_groups.length > 0) &&
                muscle_groups.map((muscle_group) => <span className="muscle-group" key={uuidv4()}>{muscle_group.major_name}</span>)}
        </div>
    )
}

export default Exercise;