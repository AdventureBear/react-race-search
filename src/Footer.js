import React, { Component, PropTypes } from 'react'
import Athlete from './Athlete'
import './Footer.css'

class Footer extends Component {

    render(){
        return (
            <div className="component-footer">
                <Athlete name={this.props.athleteName}/>
                <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </div>
        )
    }
}

Footer.PropTypes = {
    athleteName: React.PropTypes.string
};

export default Footer