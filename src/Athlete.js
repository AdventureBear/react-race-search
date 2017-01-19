import React, { Component, PropTypes } from 'react'

class Athlete extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="athlete">
                <p>{this.props.name}</p>
            </div>
        )
    }
}

Athlete.propTypes = {
    name: React.PropTypes.string
};

export default Athlete