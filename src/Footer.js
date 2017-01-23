import React, { Component, PropTypes } from 'react'
import Athlete from './Athlete'

class Footer extends Component {

    render(){
        return (
            <div className="footer">
                <Athlete name={this.props.athleteName}/>
            </div>
        )
    }
}

Footer.PropTypes = {
    athleteName: React.PropTypes.string
};

export default Footer