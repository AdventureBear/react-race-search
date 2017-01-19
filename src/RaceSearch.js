import React, { Component, PropTypes } from 'react'

class RaceSearch extends Component {
    constructor(props){
        super(props)
    }

    handleChange = (event) =>{
        this.props.textChange(event);
        console.log("You entered text")
    }

    render(){
        return (
          <div className="input-group">
              <span className="input-group-addon" id="basic-addon1">Search:</span>
              <input onChange={this.handleChange} type="text" className="form-control" placeholder="Find Race" aria-describedby="basic-addon1"  />
          </div>
        )
    }
}

RaceSearch.propTypes = {
    textChange: React.PropTypes.func
}

export default RaceSearch