import React, { Component, PropTypes } from 'react'
import './RaceRow.css'

class RaceRow extends Component {


    render(){
        return (
            <div className="component-race-row" onClick={this.props.raceClick}>
                <p>{this.props.date} {this.props.name}</p>
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