import createMarker from './createMarker';
import geoFunctions from '../services/geoFunctions';
  
const markerGenerator =(mapState)=>{
    //creates builder marker in center of map
    createMarker(mapState, {lat: 51.4894681, lng: -0.1324313},'builder')
    //creates 5 random jobs around London
    for(let i = 0; i < 5; i++) {
        createMarker(mapState,geoFunctions.randLocLond(),'job')
    }
}

export default markerGenerator