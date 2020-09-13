const jobsReducer = (state = {loading:true}, action) => {
    switch (action.type) {
      case 'INIT_JOBMARKERS':
        const initJobs = action.data
        return initJobs
      case 'ADD_TRAVEL':
        const travelJobs = action.data
        return travelJobs
      default:
        return state
    }
  }
  
  export default jobsReducer