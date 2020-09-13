const jobsReducer = (state = {loading:true}, action) => {
    switch (action.type) {
      case 'INIT_JOBMARKERS':
        const estimate = action.data
        return estimate
      default:
        return state
    }
  }
  
  export default jobsReducer