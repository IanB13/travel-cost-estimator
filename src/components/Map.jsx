import React, { useState, useEffect, useRef } from 'react';
import GoogleMapsApiLoader from "google-maps-api-loader";
import markerGenerator from './markerGenerator';

const apiKey = "AIzaSyB2588r2FH65B8M1gJsOe1GyTJ21k3E-QE";

const googleMapsOptions = {
    zoom: 10.06,
    center: {
        lat: 51.4894681,
        lng:  -0.1324313
    }
}

const Map = () => {
    const [mapState, setMapState] = useState({loading:true})
    //creates map ref that can then be modified
    const mapRef = useRef()
    useEffect(() => {
        //loads google maps API 
        GoogleMapsApiLoader({ apiKey }).then(google => {
            //creates map ref
            const map = new google.maps.Map(mapRef.current, googleMapsOptions);
            setMapState({ maps: google.maps, map, loading: false });
        });
    }, [])
    
    if(mapState.loading === false){
        markerGenerator(mapState)
    }

    return (
        <div className="map-overlay">
            <div ref={mapRef} className="google-map" />
        </div>
    )
}
      
export default Map