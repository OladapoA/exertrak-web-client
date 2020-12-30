import React, { useState, useEffect } from "react";
import RoutineExercise from "../components/RoutineExercise"

function RoutineSingle({match}) {

    useEffect(() => {
        fetchItems();
    },[])

    const [routine, setRoutine] = useState({});
    const [exercises, setExercises] = useState([]);

    const fetchItems = async () => {
        const routine = await fetch(`/api/v1/routines/${match.params.id}`);
        const exercise = await fetch(`/api/v1/routines/${match.params.id}/routine_exercises`);

        const routineData = await routine.json()
        const exerciseData = await exercise.json();

        setRoutine(routineData);
        setExercises(exerciseData);

    }
    
    return(
        <div>
            <h1>{routine.name}</h1>
            <p>{routine.description}</p>
            <div>
                {(exercises.length > 0) &&
                    exercises.map(routineExercise => <RoutineExercise key={routineExercise.routine_exercise_id} routineExercise={routineExercise} />)
                }
            </div>
        </div>
    )
}

export default RoutineSingle;