import createMarker from './createMarker';
import geoFunctions from '../services/geoFunctions';
  
const markerGenerator =(mapState)=>{
    //creates builder marker in center of map
    createMarker(mapState, {lat: 51.4894681, lng: -0.1324313},'builder')
    //creates 5 random jobs around London
    const markerData = []
    for(let i = 0; i < 5; i++) {
        const markerDataPoint = createMarker(mapState,geoFunctions.randLocLond(),'job')
        markerData.push(markerDataPoint)
    }

/*     console.log(markerData)
    mapState.maps.event.clearInstanceListeners(markerData[1].marker);
    const clientInfoWindow = new mapState.maps.InfoWindow({
       content: '<h1>IT WORKS! <h1>'
    });
    markerData[1].marker.addListener('click',  () => {
        clientInfoWindow.open(mapState.map,  markerData[1].marker);
    }); */
    return markerData;
}

export default markerGenerator