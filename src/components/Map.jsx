import React, { useState, useEffect, useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {initMap, initalizeJobMarkers,
     initalizeBuilderMarker, updateMarkers,
     initDirectionsRender,
     addTravel} from '../reducers/actions';

const Map = () => {
    const dispatch = useDispatch();
    const mapRef = useRef()
    //stop catch to stop infinite useEffect re-render loop
    const [googleStop,setGoogleStop] = useState(false)
    const [jobStop,setJobStop] =useState(false)
    
    //initializes map, only happens once
    useEffect(()=>{
        dispatch(initMap(mapRef))
    },[dispatch]) 

    const state = useSelector(state => state)
    const {google,jobs,builder,estimate} = state

    //initalizes markers and directions setter
    useEffect(()=>{
    if(!google.loading && !googleStop){
        setGoogleStop(true)
        dispatch(initalizeJobMarkers(google))
        dispatch(initalizeBuilderMarker(google))
        dispatch(initDirectionsRender(google))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch,google])

    //sets job distances 
    useEffect(()=>{
        //TODO: fix redux store handling, look into redux-thunk, async handling
        if(!jobs.loading && !jobStop){
        setJobStop(true)
        dispatch(addTravel(jobs,builder,google)) 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[jobs,builder])

    //updates marker on estimate change
    useEffect(()=>{
        if(jobs[0]?.travel){
        dispatch(updateMarkers(state))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[estimate])

    return (
        <div className="map-overlay">
            <div ref={mapRef} className="google-map" />
        </div>
    )
}
      
export default Map