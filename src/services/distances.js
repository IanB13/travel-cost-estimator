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
            console.log("code is",code)
            if(code === "OK"){
            resolve(response)
            } else{
                reject(response)
            }
        })
    })
}

const directions = await directionServiceRoutePromise(directionRequest)
console.log(directions)
return directions
}
