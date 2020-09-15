//helper functions
const mToMiles = (m) =>{
    const miles = m/1609.344;
    return Math.round(miles*10)/10
}

const roundMoney = (money) =>{
    return Math.round(money*100)/100
}

const findMilesVarRate = (travel, varRate) => {
    const {fixedTravel,fixedCost,rate} = varRate

    if( (travel/1609.344) < +fixedTravel){
        return(`<div>
        Estimate is <b>£${fixedCost}</b> for ${mToMiles(travel)} miles
        which is under ${fixedTravel} miles
        </div>`)
    }
    else if( (travel/1609.344) > +fixedTravel){
        return(`<div>
        Estimate is <b>£${roundMoney(+fixedCost + rate * (travel/1609.344 - +fixedTravel))}</b>
        for ${mToMiles(travel)} miles.
        £${fixedCost} for the first ${fixedTravel} miles and 
        £${roundMoney( (rate * (travel/1609.344)-fixedTravel ) )} for the remaining ${mToMiles(travel-fixedTravel*1609.344)} miles
        </div>`)

    }
}
//end helper functions


//code for deleting and re-writing info window 
const updateMarkers = ({google,estimate,jobs}) =>{
    //direction services
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(google.map); 

   for(const job of jobs){
       google.maps.event.clearInstanceListeners(job.marker);

        

       // turn switch case into seperate function
       let content = "error occured, please refresh"

       switch(estimate.tripType){
        case 'Trip Distance':
            if(estimate?.flatRate){
                content = `<div> 
                estimate is <b>£${ roundMoney(job.travel.dist * estimate.flatRate/1609.34)}</b>
                for ${mToMiles(job.travel.dist)} miles at £${roundMoney(estimate.flatRate)} per mile
                </div>`
            }
            else if(estimate?.varRate){
                content = findMilesVarRate(job.travel.dist,estimate.varRate)
            }
        break
        case "Trip Time":
        break
        case"Crow Flies Distance":
        if(estimate?.flatRate){
            content = `<div> 
            estimate is <b>£${ roundMoney(job.travel.crow * estimate.flatRate/1609.34)}</b>
            for ${mToMiles(job.travel.crow)} miles at £${roundMoney(estimate.flatRate)} per mile
            </div>`
        }
        else if(estimate?.varRate){
            content = findMilesVarRate(job.travel.crow,estimate.varRate)
        }
        break
        default: 
            console.error("unexpected error")
        
   }
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