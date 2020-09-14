import createMarker from './create';
import {randLocLondon} from '../geoFunctions';
  
export const jobMarkerGenerator =(mapState)=>{
    //creates 5 random jobs around London
    const markerData = []
    for(let i = 0; i < 5; i++) {
        const markerDataPoint = createMarker(mapState,randLocLondon(),'job')
        markerData.push(markerDataPoint)
    }
//code for deleting and re-writing info window 
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

export const builderMarkerGenerator = (mapState) =>{
    //creates builder marker in center of map
     return createMarker(mapState, {lat: 51.4894681, lng: -0.1324313},'builder')
}