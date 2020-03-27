import * as actionTypes from './actionTypes';

export const setSentiment = (fileData) => {
    return {
        type : actionTypes.SET_SENTIMENT_FILE,
        fileData : fileData
    }
}


export const sentimentResult = (result) => {
    return {
        type : actionTypes.SET_RESULT_SENTIMENT,
        result : result
    }
}

export const sentimentLoading = val => {
    return  {
        type : actionTypes.SENTIMENT_LOADING,
        value : val
    }
}

export const resetSentimentResult  = () => {
    return {
        type : actionTypes.RESET_SENTIMENT
    }
}

export const checkSentiment  = () => {
    return dispatch => {
        dispatch(sentimentLoading(true))
        
        //here goes the api call to the server for the sentiment
        setTimeout(() => {
            dispatch(sentimentResult('calm'))
            dispatch(sentimentLoading(false))
        }, 4000);
    }
}