import React, { Component, PropTypes } from 'react'

class RaceRow extends Component {


    render(){
        return (
            <div onClick={this.props.raceClick}>
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