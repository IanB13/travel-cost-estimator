const mapReducer = (state = {loading:true}, action) => {
    switch (action.type) {
      case 'INIT_MAP':
        const estimate = action.data
        return estimate
      case 'INIT_DIRECTIONS':
        const mapDirections = action.data
        return mapDirections
      default:
        return state
    }
  }
  
  
  export default mapReducer