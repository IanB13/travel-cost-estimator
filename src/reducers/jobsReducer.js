const jobsReducer = (state = {loading:true}, action) => {
    switch (action.type) {
      case 'INIT_JOBMARKERS':
        const initJobs = action.data
        return initJobs
      case 'ADD_TRAVEL':
        const travelJobs = action.data
        return travelJobs
      case 'UPDATE_MARKERS':
        const markerJobs = action.data
        return markerJobs
      case 'CHANGE_ESTIMATE':
        //TODO:not sure if this should be in here
        //cleans up map on estimate change
        if (state[0]?.clientInfoWindow) {
          for (const job of state) {
            job.clientInfoWindow.close();
            job.crowFlies.setMap(null);
          }
        }
      return state
      default:
        return state
    }
  }
  
  export default jobsReducer