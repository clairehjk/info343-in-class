import React, { Component } from 'react';
import firebase from 'firebase/app';
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import PurgeButton from "./components/PurgeButton";
class App extends Component {
  render() {
    let taskRef = firebase.database().ref("tasks");
    //change the reference for different channels
    return (
      <div>
        <div className="jumbotron bg-info text-white">
          <div className="container">
            <h1 className="display-3">Tasks 343</h1>
          </div>
        </div>
        <section>
          <div className="container">
          
            <NewTaskForm taskRef= {taskRef} />
            <div className="pt-3">
            <TaskList taskRef={taskRef} />
            </div>
            <PurgeButton taskRef={taskRef} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
