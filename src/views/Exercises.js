import React, {useEffect, useState} from 'react';
import Exercise from "../components/Exercise"

function Exercises({match}) {

    useEffect(() => {
        fetchItems();
        // console.log(match)
    },[match])

    const [exercises, setExercises] = useState([]);
    const [muscleGroup, setmuscleGroup] = useState({});

    const fetchItems = async () => {
        if (match.params.id){
            // console.log(match.params.id)
            const exercises = await fetch(`/api/v1/muscle_groups/${match.params.id}/exercises`);
            const muscleGroup = await fetch(`/api/v1/muscle_groups/${match.params.id}`);
            const exercisesData = await exercises.json();
            const muscleGroupData = await muscleGroup.json();
            setExercises(exercisesData)
            setmuscleGroup(muscleGroupData)
        } else {
            const exercises = await fetch("/api/v1/exercises/");
            const exercisesData = await exercises.json();
            setExercises(exercisesData)
            setmuscleGroup({})
        }
    }

    return(
        <div>
            {typeof muscleGroup.major_name === "undefined" ? <h1>All Exercises</h1> : <h1>{muscleGroup.major_name} Exercises</h1>}
            <div>
                {(exercises.length > 0) &&
                    exercises.map(exercise => <Exercise key={exercise.exercise_id} exercise={exercise} />)
                }
            </div>
        </div>
    )
}

export default Exercises;

