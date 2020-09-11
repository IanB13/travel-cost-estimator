import createMarker from './createMarker';
import geoFunctions from '../services/geoFunctions';
  
const markerGenerator =(mapState)=>{
    //creates builder marker in center of map
    createMarker(mapState, {lat: 51.4894681, lng: -0.1324313},'builder')
    //creates 5 random jobs around London
    //generated on each re-render
    for(let i = 0; i < 4; i++) {
        console.log(geoFunctions.randLocLond())
        createMarker(mapState,geoFunctions.randLocLond(),'job')
    }
}

export default markerGenerator