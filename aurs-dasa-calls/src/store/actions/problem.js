import * as actionTypes from './actionTypes';

export const setFileType = (value) => {
    return {
        type : actionTypes.SET_FILE_TYPE,
        value : value
    }
}


export const setProblemFile = (fileData) => {
    return {
        type : actionTypes.SET_PROBLEM_FILE,
        fileData : fileData
    }
}



export const resetProblemFile  = () => {
    return {
        type : actionTypes.RESET_PROBLEM_FILE
    }
}


export const problemResult = (result) => {
    return {
        type : actionTypes.PROBLEM_RESULT,
        result : result
    }
}

export const problemLoading = val => {
    return  {
        type : actionTypes.PROBLEM_LOADING,
        value : val
    }
}


export const checkProblemResult  = () => {
    return dispatch => {
        dispatch(problemLoading(true))
        
        //here goes the api call to the server for the sentiment
        setTimeout(() => {
            dispatch(problemResult('Need to Change the Location of the Car'))
            dispatch(problemLoading(false))
        }, 2000);
    }
}