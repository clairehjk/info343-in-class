import React from "react";

export default class PurgeButton extends React.Component {

    handlePurge() {
        this.props.taskRef.once("value", snapshot =>
            snapshot.forEach(taskSnapshot => {
                if(taskSnapshot.val().done) {
                    this.props.taskRef.child(taskSnapshot.key).remove();
                }
            })
        )
    }

    render() {
        return (
            <button className="btn btn-warning" onClick={() => this.handlePurge()}>
            Purge Completed Tasks!
            </button>

        );
    }
}