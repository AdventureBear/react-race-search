import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import RaceSearch from './RaceSearch'
import RaceList from './RaceList'
import Footer from './Footer'

import searchRace from './searchRace'


import raceData from './data/RaceListSass.json'
//var data = require('./data/RaceListSass'); // forward slashes will depend on the file location

raceData.forEach(function(race){
  console.log(race)
  //console.log("Date: " + raceData.Date + ", Name: " + raceData.Name)
})


class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      RaceList: raceData,
      AthleteName: "Kirsten Sass"
    }
  }
  handleSearchChange = (event) => {
    this.setState({
      RaceList: searchRace(event.target.value)
    })
    console.log('search input changed to:', event.target.value);
  }
  handleRaceClick = () => {
    console.log('You clicked me.')
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header searchType="Event Search"/>
        </div>
        <div className="App-intro">

          <RaceSearch textChange={this.handleSearchChange}/>
          <RaceList raceClick={this.handleRaceClick} races={this.state.RaceList}
          />
          <Footer athleteName={this.state.AthleteName}/>
        </div>
      </div>
    );
  }
}



export default App;
