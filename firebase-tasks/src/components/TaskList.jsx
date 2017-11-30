import React, {Component} from "react";
import Task from "./Task";

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksSnapshot: undefined
        }
    }
    componentDidMount() {
        this.props.taskRef.on("value",
            snapShot => this.setState({tasksSnapshot: snapShot}));
    }   
    componentWillUnmount() {
        this.props.taskRef.off("value");
    }
    toggleDone() {

    }
    render() {
        
            if(!this.state.tasksSnapshot) {
                return <div>Loading... Please be patient</div>;
            }
            let tasks= [];
            this.state.tasksSnapshot.forEach(taskSnapshot => {
                tasks.push(<Task key={taskSnapshot.key} taskSnapshot = {taskSnapshot}/>)
            });
            return (
                <ul>
                    {tasks}
                </ul>
            );
    }
}