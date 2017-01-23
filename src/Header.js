import React, { Component, PropTypes } from 'react'
import logo from './compass.png'
import './Header.css'

class Header extends Component {


    render(){
        return (

                <div className="component-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>{this.props.searchType}</h2>

                </div>

        )
    }
}

Header.propTypes = {
    searchType: React.PropTypes.string
};

export default Header