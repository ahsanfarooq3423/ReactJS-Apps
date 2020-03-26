import * as actionTypes from '../actions/actionTypes';

const initialState = {
    setup : 'this is the setup',
    fileData : null
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case (actionTypes.SET_SENTIMENT_FILE): 
            return {
                ...state,
                fileData : action.fileData
            }
        default : 
            return {
                ...state
            }
    }
}

export default reducer;