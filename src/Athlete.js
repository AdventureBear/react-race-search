import React, { Component, PropTypes } from 'react'
import './Athlete.css'

class Athlete extends Component {
    render(){
        return (
            <div className="component-athlete">
                <p>{this.props.name}</p>
            </div>
        )
    }
}

Athlete.PropTypes = {
    name: React.PropTypes.string
};

export default Athlete