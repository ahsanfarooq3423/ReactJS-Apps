import * as actionTypes from './actionTypes';

export const setFileStatus = () => {
    return {
        type : actionTypes.SET_FILE_STATUS
    }
}


export const resetFileStatus = () => {
    return {
        type : actionTypes.RESET_FILE_STATUS
    }
}