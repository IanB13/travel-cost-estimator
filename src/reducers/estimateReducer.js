const estimateReducer = (state = [], action) => {
    switch (action.type) {
      case 'INIT_JOBS':
        const jobPostings = action.data
        console.log("Initilizing Jobs")
        console.log(jobPostings)
        return jobPostings
      default:
        return state
    }
  }
  
  
  export default estimateReducer