import {jobTravel} from '../services/jobTravel';
import {jobMarkerGenerator, builderMarkerGenerator} from '../services/marker/generate';
import updateMarker from '../services/marker/update'
import {store} from './store'

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
                loading:false,
            }
        })
    }
}

//Creates google map
export const initDirectionsRender = (google) =>{
    return async dispatch => {
        const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(google.map);
        dispatch({
            type: 'INIT_DIRECTIONS',
            data:{
                ...google,
                directionsRenderer
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
        const data = updateMarker(state)
        dispatch({
            type: 'UPDATE_MARKERS',
            data
        })
    }
}

export const changeEstimate = (estimate) => {
    return  dispatch => {
        dispatch({
            type: 'CHANGE_ESTIMATE',
            data: estimate,
        })
    }
}


export const addTravel = (jobs,builder,google) =>{
    const modifiedJobs = jobTravel(jobs,builder,google)

     return async dispatch =>{
        dispatch({
            type: 'ADD_TRAVEL',
            data: await modifiedJobs
        })

    }

}

//TODO: reduce into single dispatch
export const googleFinishedLoading  = (mapRef) => async (dispatch) =>{
    await dispatch(initMap(mapRef))
    const initGoogle = store.getState().google
    await dispatch(initalizeJobMarkers(initGoogle))
    await dispatch(initalizeBuilderMarker(initGoogle))
    await dispatch(initDirectionsRender(initGoogle))
    const {google,jobs,builder} = store.getState()
    await dispatch(addTravel(jobs,builder,google)) 
  }