import markerContent from './content';

//code for deleting and re-writing info window 
const updateMarkers = ({google,estimate,jobs}) =>{
    //direction services
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(google.map); 

   for(const job of jobs){
       google.maps.event.clearInstanceListeners(job.marker);

        const content = markerContent(job,estimate)

       const clientInfoWindow = new google.maps.InfoWindow({
           content
       });
       
       job.marker.addListener('click', () => {
           clientInfoWindow.open(google.map, job.marker);

            if(estimate.tripType === "Crow Flies Distance"){
           const crowFlies = new google.maps.Polyline({
               path:[
                   job.travel.directions.request.origin.location,
                   job.position
               ],
               geodesic: true,
               strokeColor: "#2185d0",
               strokeOpacity: 1.0,
               strokeWeight: 2               
           })
           crowFlies.setMap(google.map)
        }
        else{
            // renders directions
           directionsRenderer.setDirections(job.travel.directions);
        }

       });
   }
}


export default updateMarkers