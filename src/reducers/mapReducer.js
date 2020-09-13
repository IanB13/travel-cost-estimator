const mapReducer = (state = {loading:true}, action) => {
    switch (action.type) {
      case 'INIT_MAP':
        const estimate = action.data
        return estimate
      default:
        return state
    }
  }
  
  
  export default mapReducer