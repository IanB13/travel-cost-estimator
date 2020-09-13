import {haversineDist,routeDirections} from './geoFunctions';

//finds distance time and crow flies distance for all points
export const jobTravel = async(jobs,builder,google) =>{
    const origin = builder.position

    const modifiedJobs =  await Promise.all(jobs.map( async job =>{
        const directions = await routeDirections(origin,job.position,google)

        const travel ={
            dist: directions.routes[0].legs[0].distance.value,
            time: directions.routes[0].legs[0].duration.value,
            crow: haversineDist(origin, job.position),
            directions
        }

        return({...job, travel})
    })
    )

return modifiedJobs
}
