import React from "react";

export default class Task extends React.Component {
    render() {
        let styles = {
            cursor: "pointer"
        }
        let doneStyles = {...styles,
            color:"#AAA",
            textDecoration:"line-through"
        }
        let task = this.props.taskSnapshot.val();
        return (
            <li style={task.done ? doneStyles : styles}
                onClick={() => this.props.taskSnapshot.ref.update({done : !task.done})}
            >
                {task.title}
            </li>
        );
    }   
}