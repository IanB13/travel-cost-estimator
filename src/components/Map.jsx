import React, { useEffect, useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {initMap, initalizeJobMarkers} from '../reducers/mapActions'


const Map = () => {
    //REDUX PART 
    const dispatch = useDispatch();
    const mapRef = useRef()

    useEffect(()=>{
        dispatch(initMap(mapRef))
    },[dispatch]) 

    const google = useSelector(state => state.google)
    
    if(!google.loading){
        dispatch(initalizeJobMarkers(google))
    }

    return (
        <div className="map-overlay">
            <div ref={mapRef} className="google-map" />
        </div>
    )
}
      
export default Map