import * as actionTypes from '../actions/actionTypes';


const initialState = {
    fileData: null,
    fileStatus: false,
    loading: false,
    result : null,
    resultStatus : false,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.SET_PROBLEM_FILE):
            return {
                ...state,
                fileData: action.fileData,
                fileStatus: true
            }
        case (actionTypes.RESET_PROBLEM_FILE):
            return {
                ...state,
                fileData: null,
                fileStatus: false,
                loading: false,
                result: null,
                resultStatus: false
            }
        case (actionTypes.PROBLEM_LOADING): {
            return {
                loading: action.value
            }
        }
        case (actionTypes.PROBLEM_RESULT) : {
            return {
                ...state,
                result: action.result,
                resultStatus: true
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default reducer;