const builderReducer = (state = null, action) => {
    switch (action.type) {
      case 'INIT_BUILDERMARKER':
        const estimate = action.data
        return estimate
      default:
        return state
    }
  }
  
  export default builderReducer