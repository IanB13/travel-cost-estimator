const mapReducer = (state = {loading:true}, action) => {
    switch (action.type) {
      case 'INIT_MAP':
        const estimate = action.data
        return estimate
      case 'INIT_DIRECTIONS':
        const mapDirections = action.data
        return mapDirections
      case 'CHANGE_ESTIMATE':
        //TODO:not sure if this should be in here
        //cleans up map on estimate change
        if (state?.directionsRenderer) {
          state.directionsRenderer.set('directions', null);
        }
        return state
      default:
        return state
    }
  }
  
  
  export default mapReducer