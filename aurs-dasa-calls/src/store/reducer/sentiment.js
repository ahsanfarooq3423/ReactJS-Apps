import * as actionTypes from '../actions/actionTypes';

const initialState = {
    fileData: null,
    fileSetStatus: false,
    loading: false,
    result : null,
    resultStatus : false,

    totalCalls : 345,
    angryCalls : 65,
    calmCalls  : 280

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.SET_SENTIMENT_FILE):
            return {
                ...state,
                fileData: action.fileData,
                fileSetStatus: true
            }
        case (actionTypes.SENTIMENT_LOADING):
            return {
                ...state,
                loading: action.value
            }
        case (actionTypes.SET_RESULT_SENTIMENT):
            return {
                ...state,
                result : action.result,
                resultStatus : true
            }
        case (actionTypes.RESET_SENTIMENT) : 
            return {
                ...state,
                fileData : null,
                fileSetStatus : false,
                loading : false,
                result : null,
                resultStatus : false
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;