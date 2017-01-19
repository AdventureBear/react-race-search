import React, { Component, PropTypes } from 'react'
import Athlete from './Athlete'

class Footer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="footer">
                <Athlete name={this.props.athleteName}/>
            </div>
        )
    }
}

Footer.propTypes = {
    athleteName: React.PropTypes.string
};

export default Footer