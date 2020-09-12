const estimateReducer = (state = [], action) => {
    switch (action.type) {
      case 'CHANGE_ESTIMATE':
        const estimate = action.data
        return estimate
      default:
        return state
    }
  }
  
  
  export default estimateReducer