import React, { Component, PropTypes } from 'react'
import logo from './logo.svg'

class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (

                <div className="header">
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