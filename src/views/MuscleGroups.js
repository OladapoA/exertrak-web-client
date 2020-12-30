import React, {useEffect, useState} from 'react';
import MuscleGroup from "../components/MuscleGroup"

function MuscleGroups() {

    useEffect(() => {
        fetchItems();
    },[])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch("/api/v1/muscle_groups/");

        const items = await data.json();
        // console.log(items);
        setItems(items)
    }

    return(
        <div>
            <h1>MUSCLE GROUPS</h1>
            <div>
                {(items.length > 0) && 
                    items.map(muscleGroup => <MuscleGroup key={muscleGroup.muscle_group_id} muscleGroup={muscleGroup} />)
                }
            </div>
        </div>
    )
}

export default MuscleGroups;