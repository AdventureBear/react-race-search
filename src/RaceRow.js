import React, { Component, PropTypes } from 'react'
import './RaceRow.css'

class RaceRow extends Component {


    render(){
        return (
            <div className="component-racerow" onClick={this.props.raceClick}>
                <p><span className="date">{this.props.date}</span> <span className="name">{this.props.name}</span>
                <span className="location">{this.props.location}</span></p>
            </div>
        )
    }
}

RaceRow.propTypes = {
    name: React.PropTypes.string,
    date: React.PropTypes.string,
    raceClick: React.PropTypes.func
};

export default RaceRow