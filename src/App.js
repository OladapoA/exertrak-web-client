import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css";
import Home from "./views/Home";
import Nav from "./components/Nav";
import Users from "./views/Users"
import UserSingle from "./views/UserSingle/";
import About from "./views/About";
import Routines from "./views/Routines";
import Exercises from "./views/Exercises";
import MuscleGroups from "./views/MuscleGroups";
import Routine from "./views/RoutineSingle";

function App() {
  return (
    //everything inside Router will have the ability to use routing
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/> {/* adding exact is required for the other routes to work */}
          <Route path="/about" component={About}/>
          <Route path="/users" exact component={Users}/>
          <Route path="/users/:id" component={UserSingle}/>
          <Route path="/routines" exact component={Routines}/>
          <Route path="/routines/:id/routine_exercises" component={Routine} />
          <Route path="/exercises" component={Exercises} type="exercise"/>
          <Route path="/muscle_groups" exact component={MuscleGroups}/>
          <Route path="/muscle_groups/:id/exercises" exact component={Exercises} type="muscle_group"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
