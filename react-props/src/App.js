import React, { Component } from 'react';
import './App.css';
import Alert from "./components/Alert";
import Button from "./components/Button";
import Card from "./components/Card";
class App extends Component {
  handleButtonClick() {
    console.log("button added to the App was clicked!");
  }
  donthandleButtonClick() {
    console.log("told you not to click...");    
  }
  render() {
    
    let alerts = [
      {
        id: 1,
        message: "Alert me",
        type: "primary"
      },
      {
        id: 2,
        message: "Zombie Attack iminent",
        type: "danger"
      }
    ];

    return (
      <div className="container">
        {alerts.map(a => 
          <Alert 
            key={a.id} 
            message={a.message} 
            type={a.type} 
          />)}
        <Card 
          title="My Card" 
          imgsrc="dog.JPG" 
          imgalt="Doggie" 
          width={300}>
            <p>This is my<strong> favorite </strong>
            dog</p>
            <p>She is the cutest!</p>
           <Alert message = "SO CUTE"/>
        </Card>
        <br />
        <Button caption="Click Me!"
          onClick={() => this.handleButtonClick()}
        />
        <br />
        <br />
        <Button caption="DO NOT CLICK!"
          onClick={() => this.donthandleButtonClick()}
        />
      </div>
    );
  }
}

export default App;
