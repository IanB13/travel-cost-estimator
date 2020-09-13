import {jobTravel} from '../services/jobTravel';

export const changeEstimate = (estimate) => {
    return  dispatch => {
        dispatch({
            type: 'CHANGE_ESTIMATE',
            data: estimate,
        })
    }
}


export const addTravel = (jobs,builder,google) =>{
    const modifiedJobs = jobTravel(jobs,builder,google)
    //get location of builder
    

    //where the calculations come in for each thing

    
     return async dispatch =>{
        dispatch({
            type: 'ADD_TRAVEL',
            data: await modifiedJobs
        })

    }

}