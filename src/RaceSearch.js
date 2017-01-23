import React, { Component, PropTypes } from 'react'
import './RaceSearch.css'

class RaceSearch extends Component {


    handleChange = (event) =>{
        this.props.textChange(event);
        console.log("You entered text")
    }

    render(){
        return (
          <div className="component-race-search">
              <span>Search:</span>
              <input onChange={this.handleChange}  placeholder="Find Race" />
          </div>
        )
    }
}

RaceSearch.propTypes = {
    textChange: React.PropTypes.func
}

export default RaceSearch