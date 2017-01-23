import React, { Component, PropTypes } from 'react'
import RaceRow from './RaceRow'
import RaceDetail from './RaceDetail'

import './RaceList.css'


class RaceList extends Component {

    render(){

        return (
            <div className="component-RaceList">

                {
                    this.props.races.map((race,i) => {
                        //console.log("Race Name: ", race, i)
                        return <RaceRow  raceClick={this.props.raceClick} key={i} date={race.Date} name={race.Name} />
                    })
                }

                {/* <RaceDetail name={this.props.races[0].Name}  date={this.props.races[0].Date} type="Swim" location="Sassy YWCA" city="Nashville" state="TN" website="www.thissite.com" /> */}
                {/*<RaceDetail name={this.props.races[0].Name}  date={this.props.races[0].Date} type={this.props.races[0].Type} location={this.props.races[0].Location} website={this.props.races[0].Information} />*/}

            </div>
        )
    }
}

RaceList.propTypes = {
    races: React.PropTypes.array,
    raceClick: React.PropTypes.func
};



export default RaceList