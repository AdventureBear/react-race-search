import React, { Component, PropTypes } from 'react'
import RaceRow from './RaceRow'
import RaceDetail from './RaceDetail'
class RaceList extends Component {
    constructor(props){
        super(props)
    }

    render(){

        return (
            <div className = "RaceList">

                {
                    this.props.races.map((race,i) => {
                        console.log("Race Name: ", race, i)
                        return <RaceRow  raceClick={this.props.raceClick} key={i} date={race.Date} name={race.Name}/>
                    })
                }

                {/* <RaceDetail name={this.props.races[0].Name}  date={this.props.races[0].Date} type="Swim" location="Sassy YWCA" city="Nashville" state="TN" website="www.thissite.com" /> */}
                <RaceDetail name={this.props.races[0].Name}  date={this.props.races[0].Date} type="Swim" location="Sassy YWCA" city="Nashville" state="TN" website="www.thissite.com" />

            </div>
        )
    }
}

RaceList.propTypes = {
    races: React.PropTypes.array,
    raceClick: React.PropTypes.func
};



export default RaceList