import {jobMarkerGenerator, builderMarkerGenerator} from '../services/marker/generate';
import updateMarker from '../services/marker/update'

//initilize map
import GoogleMapsApiLoader from "google-maps-api-loader";
const apiKey = process.env.REACT_APP_API_KEY;
//sets location to London,England
const googleMapsOptions = {
    zoom: 10.06,
    center: {
        lat: 51.4894681,
        lng:  -0.1324313
    },
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
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

export const updateMarkers = (state) =>{
    return  dispatch => {
        updateMarker(state)
        dispatch({
            type: 'UPDATE_MARKER'
        })
    }
}