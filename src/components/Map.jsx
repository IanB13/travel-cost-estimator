import React, { useEffect, useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {initMap, initalizeJobMarkers, initalizeBuilderMarker} from '../reducers/mapActions'
import {addTravel} from '../reducers/actions'

const Map = () => {
    const dispatch = useDispatch();
    const mapRef = useRef()

    useEffect(()=>{
        dispatch(initMap(mapRef))
    },[dispatch]) 

    const state = useSelector(state => state)
    const {google,jobs,builder} = state

    useEffect(()=>{
    if(!google.loading){
        dispatch(initalizeJobMarkers(google))
        dispatch(initalizeBuilderMarker(google))
    }
    },[dispatch,google])

    useEffect(()=>{
        if(jobs?.position && builder){
        dispatch(addTravel(jobs,builder,google)) 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[jobs,builder])


    return (
        <div className="map-overlay">
            <div ref={mapRef} className="google-map" />
        </div>
    )
}
      
export default Map