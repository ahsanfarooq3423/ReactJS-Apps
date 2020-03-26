import * as actionTypes from '../actions/actionTypes';

const initialState = {
    fileStatus : false
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case (actionTypes.SET_FILE_STATUS): 
            return {
                ...state,
                fileStatus : true
            }
        default : 
            return {
                ...state
            }
    }
}

export default reducer;