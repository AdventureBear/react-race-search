import React, { Component, PropTypes } from 'react'
import Athlete from './Athlete'
import './Footer.css'

class Footer extends Component {

    render(){
        return (
            <div className="component-footer">
                <Athlete name={this.props.athleteName}/>
            </div>
        )
    }
}

Footer.PropTypes = {
    athleteName: React.PropTypes.string
};

export default Footer