export const getProducts = (data) => dispatch => {
    dispatch({
     type: 'GET_PRODUCTS',
     newData: data,
    })
}

export const changeLoadingState = (data) => dispatch => {
    dispatch({
        type: 'CHANGE_LOADING_STATE',
        data: data,
       })
}

export const setSearchText = (data) => dispatch => {
    dispatch({
        type: 'SEARCH_LIST',
        data: data,
       })
}