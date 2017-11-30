import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="jumbotron bg-dark">
          <h1 className="display-3 text-white">Redux Todo</h1>
        </header>
        <section className="container">
          <form className="pb-3">
            <input type="text" className="form-control" placeholder="what do you want to do?"></input>
          </form>

          <ul className="list-group">
            <li className='list-group-item'>To do item #1</li>
            <li className='list-group-item'>To do item #2</li>
            <li className='list-group-item'>To do item #3</li>
          </ul>

          <ul className ="nav">
            <li className="nav-item">
              <a className="nav-link" href="#all">All</a>
            </li>
            <li>
              <a className="nav-link" href="#active">Active</a>
            </li>
            <li>
              <a className="nav-link" href="#completed">Completed</a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
