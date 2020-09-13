import {jobMarkerGenerator, builderMarkerGenerator} from '../services/markerGenerator';
//initilize map
import GoogleMapsApiLoader from "google-maps-api-loader";
const apiKey = process.env.REACT_APP_API_KEY;
//sets location to London,England
const googleMapsOptions = {
    zoom: 10.06,
    center: {
        lat: 51.4894681,
        lng:  -0.1324313
    }
}

//Creates google map
export const initMap = (mapRef) =>{
    return async dispatch => {
        const google = await GoogleMapsApiLoader({ apiKey })
        const map = new google.maps.Map(mapRef.current, googleMapsOptions);
        dispatch({
            type: 'INIT_MAP',
            data:{
                map,
                maps:google.maps,
                loading:false
            }
        })
    }
}

// Initilizes Jobs and builder
export const initalizeJobMarkers =(google) =>{
    return  dispatch => {
        const data = jobMarkerGenerator(google)
        dispatch({
            type: 'INIT_JOBMARKERS',
            data
        })
    }
}

export const initalizeBuilderMarker = (google) =>{
    return  dispatch => {
        const data = builderMarkerGenerator(google)
        dispatch({
            type: 'INIT_BUILDERMARKER',
            data
        })
    }
}

//for changing 
export const changeJob = () =>{}

/*     console.log(markerData)
    mapState.maps.event.clearInstanceListeners(markerData[1].marker);
    const clientInfoWindow = new mapState.maps.InfoWindow({
       content: '<h1>IT WORKS! <h1>'
    });
    markerData[1].marker.addListener('click',  () => {
        clientInfoWindow.open(mapState.map,  markerData[1].marker);
    }); */