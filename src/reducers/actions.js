export const changeEstimate = (estimate) => {
    return  dispatch => {
        dispatch({
            type: 'CHANGE_ESTIMATE',
            data: estimate,
        })
    }
}