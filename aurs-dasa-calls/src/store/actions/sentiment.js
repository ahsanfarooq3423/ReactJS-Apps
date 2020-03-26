import * as actionTypes from './actionTypes';

export const setSentiment = (fileData) => {
    return {
        type : actionTypes.SET_SENTIMENT_FILE,
        fileData : fileData
    }
}