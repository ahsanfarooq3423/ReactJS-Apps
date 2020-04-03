import * as actionTypes from './actionTypes';

export const setSpeechTextFile = (fileData) => {
    return {
        type : actionTypes.SET_SPEECH_FILE,
        fileData : fileData
    }
}

export const resetSpeechText  = () => {
    return {
        type : actionTypes.RESET_SPEECH_TEXT
    }
}


export const speechResult = (result) => {
    return {
        type : actionTypes.SET_RESULT_SPEECH,
        result : result
    }
}

export const speechLoading = val => {
    return  {
        type : actionTypes.SPEECH_LOADING,
        value : val
    }
}


export const checkSpeechText  = () => {
    return dispatch => {
        dispatch(speechLoading(true))
        
        //here goes the api call to the server for the sentiment
        setTimeout(() => {
            dispatch(speechResult('ٹھیس اس احسن فاروقٹھیس اس احسن فاروق ٹھیس اس احسن فاروق ٹھیس اس'))
            dispatch(speechLoading(false))
        }, 2000);
    }
}