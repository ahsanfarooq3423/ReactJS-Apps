import * as actionTypes from './actionTypes';

const data = [['گاڑی', 364],
['ٹریکر', 126],
['لوکیشن', 114],
['حافظ', 95],
['پاس', 93],
['شکریہ', 92],
['یو', 91],
['ابھی', 90],
['کال', 89],
['بلکل', 87],
['بجے', 81],
['بھی', 74],
['فور', 73],
['ہاں', 70],
['بہت', 66],
['آ', 66],
['حوالے', 63],
['کو', 62],
['تھینک', 62],
['جو', 62],
['منٹ', 57],
['تھا', 57],
['چیک', 57],
['اگنیشن', 54],
['میرے', 54],
['یار', 54],
['ہیلپ', 53],
['پی', 53],
['ایل', 53],
['کرنے', 51]
]

export const setFileStatus = () => {
    return {
        type : actionTypes.SET_FILE_STATUS
    }
}

export const resourceLoading = val => {
    return  {
        type : actionTypes.RESOURCE_LOADING,
        value : val
    }
}


export const setFreqCount = (data) => {
    return {
        type : actionTypes.SET_FREQ_COUNT,
        data : data
    }
}

export const getFreqCount = () => {
    return dispatch => {
        dispatch(resourceLoading(true))

        //here goes the api call to the server for the sentiment
        setTimeout(() => {
            dispatch(setFreqCount(data))
            dispatch(resourceLoading(false))
        },1200)

    }
}
