import * as actionTypes from './actionTypes';

const rows = [
    {
        name : 'Audio_Call_TPL_1',
        value : 'Angry',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        value : 'Angry',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        value : 'Angry',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        value : 'Angry',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        value : 'Angry',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
    {
        name : 'Audio_Call_TPL_1',
        value : 'Angry',
        date : '23-March-2020',
        size : '4.1 MB',
        length : '2:20 minutes'
    },
]

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
        }, 1500);
    }
}

export const setSentimentHistory = (data) => {
    return {
        type : actionTypes.SET_SENTIMENT_HISTORY,
        data : data
    }
}


export const getSentimentHistory = () => {
    return dispatch => {
        dispatch(sentimentLoading(true))

        //here goes the api call to the server for the sentiment
        setTimeout(() => {
            dispatch(setSentimentHistory(rows))
            dispatch(sentimentLoading(false))
        },1200)

    }
}


