import React, { Component, PropTypes } from 'react'

class RaceDetail extends Component {


    render(){
        return (
            <div>
                <h3>Event Name: {this.props.name} </h3>
                <p>Event Type: {this.props.type} </p>
                <p>Date: {this.props.date}</p>
                <p>Location: {this.props.location} </p>
                <p>City, State: {this.props.city}, {this.props.state} </p>
                <p>Website: {this.props.website}</p>
            </div>
        )
    }
}

RaceDetail.propTypes = {
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    date: React.PropTypes.string,
    location: React.PropTypes.string,
    city: React.PropTypes.string,
    state: React.PropTypes.string,
    website: React.PropTypes.string
};

export default RaceDetail