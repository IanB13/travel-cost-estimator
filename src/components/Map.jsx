import React, { useState, useEffect, useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {initMap, initalizeJobMarkers, initalizeBuilderMarker, updateMarkers} from '../reducers/mapActions';
import {addTravel} from '../reducers/actions';

const Map = () => {
    const dispatch = useDispatch();
    const mapRef = useRef()
    const [stop,setStop] = useState(false)

    useEffect(()=>{
        dispatch(initMap(mapRef))
    },[dispatch]) 

    const state = useSelector(state => state)
    const {google,jobs,builder,estimate} = state

    useEffect(()=>{
    if(!google.loading){
        dispatch(initalizeJobMarkers(google))
        dispatch(initalizeBuilderMarker(google))
    }
    },[dispatch,google])

    useEffect(()=>{
        //This is some of the jankiest code I have ever written
        //TODO: fix state handling, look into redux-thunk, async handling
        if(!jobs.loading && !stop){
        setStop(true)
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