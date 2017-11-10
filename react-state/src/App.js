import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import logo from './logo.svg';
import './App.css';

let starterTasks = [
  {id:0, title: "Learn React State"},
  {id:1, title:"Buy more leggings"}
];

let nextID = starterTasks.length;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: starterTasks};
}
purgleCompleted() {
  let purgedTasks = this.state.tasks.filter(task => !task.done);
  this.setState({tasks:purgedTasks});
}
handleNewTask(task) {
  task.id = nextID++;
  this.setState({tasks: this.state.tasks.concat(task)});
}

toggleDone(taskID) {
  let newTasks = this.state.tasks.map(task => {
    if(task.id === taskID) {
      task.done = !task.done;
    }
    return task;
  });

  this.setState({tasks: newTasks});
}

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Clock />
        <div>
          <h2>Tasks!</h2>
          <NewTaskForm onNewTask={(task) => this.handleNewTask(task)} />
          <TaskList tasks = 
            {this.state.tasks} 
            toggleDone={
              (taskID) => this.toggleDone(taskID)
              } />
              <button className="button" onClick={() =>this.purgeCompleted()}>
                Purge Completed!!
                </button>
        </div>
      </div>
    );
  }
}

export default App;
