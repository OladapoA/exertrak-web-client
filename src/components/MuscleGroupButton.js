import React, {useState} from "react";
import { ToggleButton, ButtonGroup } from 'react-bootstrap';
// import "./MuscleGroup.css"

function MuscleGroupButton(props) {
    const { muscle_group_id: id, major_name: name } = props.muscleGroup;

    const [checked, setChecked] = useState(false);

    return(
        <ButtonGroup toggle className="mb-2">
            <ToggleButton
            type="checkbox"
            variant="outline-secondary"
            checked={checked}
            name={name}
            value={id}
            onChange={(e) => {
                setChecked(e.currentTarget.checked);
                props.handleChange(e);
                }}
            >
                {name}
            </ToggleButton>
        </ButtonGroup>
    )
}

export default MuscleGroupButton;