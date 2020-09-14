//function to generate random gps location in London
export const randLocLondon = () => {
    const lat = 51.299321 + Math.random() * .380936;
    const lng = -0.461063 + Math.random() * .602621;
    return { lat, lng }
}

//haversineDist
//function that gets distance between two points on globe
//from: http://www.movable-type.co.uk/scripts/latlong.html

export const haversineDist = (coordinates1, coordinates2) => {
    const lng1 = coordinates1.lng, lat1 = coordinates1.lat
    const lng2 = coordinates2.lng, lat2 = coordinates2.lat
    const R = 6371e3; // radius of the earth in meters 
    const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lng2 - lng1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    return d
}

// uses google direction service
export const routeDirections = async (origin, destination, google) =>{
    const directionsService = new google.maps.DirectionsService();
    
    const directionRequest = {
        origin,
        destination,
        travelMode: "DRIVING"
    }
    
    // wrapping directionServices.Route in promise for async functionality
    const directionServiceRoutePromise = (directions) =>{
        return new Promise((resolve, reject) => {
            directionsService.route((directions),(response, code)=>{
                if(code === "OK"){
                resolve(response)
                } else{
                    reject(response)
                }
            })
        })
    }
    
    const directions = await directionServiceRoutePromise(directionRequest)
    return directions
}


