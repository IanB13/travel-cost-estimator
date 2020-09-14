//code for deleting and re-writing info window 
const updateMarkers = ({google,estimate,jobs}) =>{
/*    switch(estimate.type){
        default: {
            
        }
   } */

   console.log(jobs)
   for(const job of jobs){
       google.maps.event.clearInstanceListeners(job.marker);
       const clientInfoWindow = new google.maps.InfoWindow({
           content: `<div> crow flies distance is ${job.travel.crow}</div>
                <div>driving distance is ${job.travel.dist}</div>`
       });
       job.marker.addListener('click', () => {
           clientInfoWindow.open(google.map, job.marker);
       });
   }
}

export default updateMarkers