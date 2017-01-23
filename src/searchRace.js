/**
 * Created by suzanne on 1/20/17.
 */
import raceList from './data/RaceListSass.json'

export default function searchRaces(searchString,maxResults){
  return raceList.filter((race) => {
    if (race.Name.toLowerCase().includes(searchString.toLowerCase())) {
      console.log("Race: " + race.Name + " includes " + searchString)
      return true
    }
    //if (race.Location.includes(searchString)) {
    //  return true
    //}
    return false
  }
  ).slice(0, maxResults)
}


