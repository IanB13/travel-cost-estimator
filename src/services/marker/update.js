import markerContent from './content';

//code for deleting and re-writing info window 
const updateMarkers =  ({ google, estimate, jobs }) => {

    const updatedJobs = [];

    //first LOOP
    //sets markers 
    for (const job of jobs) {
        google.maps.event.clearInstanceListeners(job.marker);

        const content = markerContent(job, estimate)

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
        
        const clientInfoWindow = new google.maps.InfoWindow({
            content
        });

        updatedJobs.push( {...job,crowFlies,clientInfoWindow})
    }

    //Second Loop
    //sets event listners
    for(const job of updatedJobs){
        const clientInfoWindow = job.clientInfoWindow
        const crowFlies = job.crowFlies

        job.marker.addListener('click', () => {

            if (estimate.tripType === "Crow Flies Distance") {
                for (const jobref of updatedJobs) {
                    jobref.crowFlies.setMap(null)
                    jobref.clientInfoWindow.close()
                }
                crowFlies.setMap(google.map)
            }
            else {
                // renders directions
                for(const jobref of updatedJobs){
                    jobref.clientInfoWindow.close()
                }
                google.directionsRenderer.setDirections(job.travel.directions);
            }
            clientInfoWindow.open(google.map, job.marker);

        });

    }


    return updatedJobs
}


export default updateMarkers