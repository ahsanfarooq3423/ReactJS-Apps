import * as actionTypes from './actionTypes';

// THIS rows is a temporary data, for the history table, later it will 
// be fetched from the backend
const rows = [
    {
        name : 'Audio_Call_TPL_1',
        value : 'Car has stopped running',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        value : 'Need to Activate the Car for Other Location (Out of City) etc.',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        value : 'Car has stopped running',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        value : 'Need to Know the Location of the Car',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        value : 'Battery Drainage Issue',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        value : 'Need to Know the Location of the Car',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
]


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
        }, 1200);
    }
}


export const setProblemHistory = (data) => {
    return {
        type : actionTypes.SET_PROBLEMS_HISTORY,
        data : data
    }
}


export const getProblemHistory = () => {
    return dispatch => {
        dispatch(problemLoading(true))

        //here goes the api call to the server for the sentiment
        setTimeout(() => {
            dispatch(setProblemHistory(rows))
            dispatch(problemLoading(false))
        },1200)

    }
}
