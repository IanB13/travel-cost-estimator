import {haversineDist} from '../services/geoFunctions';

export const changeEstimate = (estimate) => {
    return  dispatch => {
        dispatch({
            type: 'CHANGE_ESTIMATE',
            data: estimate,
        })
    }
}


export const addTravel = (jobs,builder) =>{
    //get location of builder
    const origin = builder.position

    //where the calculations come in for each thing
    const modifiedJobs = jobs.map(job =>{
        const travel ={
            dist: "TBD",
            time: "TBD",
            crow: haversineDist(origin, job.position)
        }
        console.log({...job, travel})
        return({...job, travel})
    })


     return async dispatch =>{
        dispatch({
            type: 'ADD_TRAVEL',
            data: modifiedJobs
        })

    }

}