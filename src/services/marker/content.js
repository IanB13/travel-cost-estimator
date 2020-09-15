//helper functions
const mToMiles = (m) =>{
    const miles = m/1609.344;
    return Math.round(miles*10)/10
}

const roundMoney = (money) =>{
    return Math.round(money*100)/100
}
//TODO: Add hours, minute vs minutes, etc.
const timeString = (s) =>{
    const minutes = Math.round(s/60)
    const seconds = s%60
    return( `${minutes} minutes, ${seconds} seconds`)
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

const findTimeVarRate = (travel, varRate) => {
    const {fixedTravel,fixedCost,rate} = varRate

    if( (travel/60) < +fixedTravel){
        return(`<div>
        Estimate is <b>£${fixedCost}</b> for ${timeString(travel)} 
        which is under ${fixedTravel} minutes
        </div>`)
    }
//TODO: fix costs, somehow ends up a dollar short
    else if( (travel/60) > +fixedTravel){
        return(`<div>
        Estimate is <b>£${roundMoney( +fixedCost + rate * (travel- +fixedTravel*60)/60)}</b>
        for ${timeString(travel)}.
        £${fixedCost} for the first ${fixedTravel} minutes and 
        £${roundMoney( (rate * ((travel - +fixedTravel*60)/60 )) )} for the remaining ${timeString(travel-fixedTravel*60)} 
        </div>`)

    }
}
//end helper functions

const markerContent = (job, estimate) =>{
    
       // turn switch case into seperate function
       let content = "An error occured, please refresh"

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
            if(estimate?.flatRate){
                content = `<div> 
                estimate is <b>£${ roundMoney(job.travel.time * (estimate.flatRate/60))}</b>
                for ${timeString(job.travel.time)} at £${roundMoney(estimate.flatRate)} per minute
                </div>`
            }
            else if(estimate?.varRate){
                content = findTimeVarRate(job.travel.time,estimate.varRate)
            }
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
   return content
}

export default markerContent;