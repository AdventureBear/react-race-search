import React, { Component, PropTypes } from 'react'

class Athlete extends Component {
    render(){
        return (
            <div className="athlete">
                <p>{this.props.name}</p>
            </div>
        )
    }
}

Athlete.PropTypes = {
    name: React.PropTypes.string
};

export default Athlete