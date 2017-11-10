import React from "react";

//extending React.Component
//class alert
//make that class avail to other using export
export default class Alert extends React.Component {
    render() {
        let className = "alert alert-" + 
            (this.props.type || "success");
        return (
            <div className = {className}>
                {this.props.message}
            </div>
        );
    }
}