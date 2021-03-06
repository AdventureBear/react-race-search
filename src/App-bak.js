import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import data from './data/RaceListSass'
//var data = require('./data/RaceListSass'); // forward slashes will depend on the file location

data.forEach(function(race){
  console.log("Date: " + race.Date + ", Name: " + race.Name)
})


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}



export default App;
