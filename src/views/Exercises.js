import React, {useEffect, useState} from 'react';
import Exercise from "../components/Exercise"

function Exercises({match}) {

    useEffect(() => {
        fetchItems();
        // console.log(match)
    },[match])

    const [exercises, setExercises] = useState([]);

    const fetchItems = async () => {
        if (match.params.id){
            // console.log(match.params.id)
            const exercises = await fetch(`/api/v1/muscle_groups/${match.params.id}/exercises`);
            const exercisesData = await exercises.json();
            setExercises(exercisesData)
        } else {
            const exercises = await fetch("/api/v1/exercises/");
            const exercisesData = await exercises.json();
            setExercises(exercisesData)
        }
    }

    return(
        <div>
            <h1>EXERCISES</h1>
            <div>
                {(exercises.length > 0) &&
                    exercises.map(exercise => <Exercise key={exercise.exercise_id} exercise={exercise} />)
                }
            </div>
        </div>
    )
}

export default Exercises;

