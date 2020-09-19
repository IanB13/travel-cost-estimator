import React, { useEffect, useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { updateMarkers, googleFinishedLoading } from '../reducers/actions';

const Map = () => {
    const dispatch = useDispatch();
    const mapRef = useRef()

    const state = useSelector(state => state)
    const {jobs,estimate} = state

    //initializes map, only happens once
    useEffect(()=>{
        dispatch(googleFinishedLoading(mapRef))
    },[dispatch]) 

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