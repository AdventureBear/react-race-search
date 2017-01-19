import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import RaceSearch from './RaceSearch'
import RaceList from './RaceList'
import Footer from './Footer'

import data from './data/RaceListSass.json'
//var data = require('./data/RaceListSass'); // forward slashes will depend on the file location

data.forEach(function(race){
  console.log("Date: " + race.Date + ", Name: " + race.Name)
})


class App extends Component {
  handleSearchChange = (event) => {
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
          <RaceList raceClick={this.handleRaceClick} races = {[
            {
                "Date": "1/7/2017",
                "WeekNum": 2,
                "Name": "Nashville 5k",
                "Priority": "",
                "Distance": "",
                "Type": "Run",
                "Location": "Nashville",
                "Info:": "www.thissite.com"
            },
            {
                "Date": "1/8/2017",
                "WeekNum": 2,
                "Name": "ALS 100x100 Swim",
                "Priority": "",
                "Distance": "",
                "Type": "Swim",
                "Location": "YWCA",
                "Info:": "www.thatsite.com"
            },
            {
                "Date": "1/14",
                "WeekNum": 3,
                "Name": "7 mile TT",
                "Priority": "",
                "Distance": "",
                "Type": "Bike",
                "Location": "Somewhere",
                "Info:": "www.moresites.com"
            }
        ]} />
          <Footer athleteName="Kirsten Sass"/>
        </div>
      </div>
    );
  }
}



export default App;
