import markerGenerator from '../services/markerGenerator';
//initilize map
import GoogleMapsApiLoader from "google-maps-api-loader";
const apiKey = "AIzaSyB2588r2FH65B8M1gJsOe1GyTJ21k3E-QE";
//sets location to London,England
const googleMapsOptions = {
    zoom: 10.06,
    center: {
        lat: 51.4894681,
        lng:  -0.1324313
    }
}

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


export const initalizeJobMarkers =(google) =>{
    return  dispatch => {
        const data = markerGenerator(google)
        dispatch({
            type: 'INIT_JOBMARKERS',
            data
        })
    }
}