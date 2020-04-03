import * as actionTypes from '../actions/actionTypes';

const initialState = {
    fileData: null,
    fileStatus: false,
    loading: false,
    result: null,
    resultStatus: false,

    errorRate : 60,
    totalCalls : 290,
    dataSet : 'TPL'
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.SET_SPEECH_FILE):
            return {
                ...state,
                fileData: action.fileData,
                fileStatus : true
            }
        case (actionTypes.SPEECH_LOADING):
            return {
                ...state,
                loading: action.value
            }
        case (actionTypes.SET_RESULT_SPEECH):
            return {
                ...state,
                result: action.result,
                resultStatus: true
            }
        case (actionTypes.RESET_SPEECH_TEXT):
            return {
                ...state,
                fileData: null,
                fileSetStatus: false,
                loading: false,
                result: null,
                resultStatus: false
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;