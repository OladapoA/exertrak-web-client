import React, { useState, useEffect } from "react";
import Routine from '../components/Routine';

function Routines() {

    useEffect(() => {
        fetchItems();
    },[])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch("/api/v1/routines/");

        const items = await data.json();
        // console.log(items);
        setItems(items)
    }

    return(
        <div>
            <h1>Routines</h1>
            <div>
                {(items.length > 0) && 
                    items.map(routine => <Routine key={routine.routine_id} routine={routine} />)
                }
            </div>
        </div>
    )
}

export default Routines;