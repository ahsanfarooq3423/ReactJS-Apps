import * as actionTypes from './actionTypes';

const freqData = [['گاڑی', 364],
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

const nGramData = [[['تھینک', 'یو'], 62],
[['پی', 'ایل'], 50],
[['بہت', 'شکریہ'], 45],
[['اللہ', 'حافظ'], 44],
[['الله', 'حافظ'], 39],
[['ٹی', 'پی'], 38],
[['کال', 'کرنے'], 36],
[['کرنٹ', 'لوکیشن'], 36],
[['پاس', 'ورڈ'], 36],
[['میرے', 'پاس'], 30],
[['گاڑی', 'اگنیشن'], 27],
[['ایل', 'ٹریکر'], 27],
[['اپنا', 'خیال'], 27],
[['اگنیشن', 'آف'], 24],
[['اگنیشن', 'آن'], 24],
[['کتنے', 'بجے'], 24],
[['لنک', 'روڈ'], 24],
[['شکریہ', 'اپنا'], 21],
[['خیال', 'رکھیے'], 21],
[['کرنے', 'شکریہ'], 18]]

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
            dispatch(setFreqCount(freqData))
            dispatch(resourceLoading(false))
        },1200)

    }
}


export const setNgramCount = (data) => {
    return {
        type : actionTypes.SET_NGRAM_COUNT,
        data : data
    }
}

export const getNgramCount = () => {
    return dispatch => {
        dispatch(resourceLoading(true))

        //here goes the api call to the server for the sentiment
        setTimeout(() => {
            dispatch(setNgramCount(nGramData))
            dispatch(resourceLoading(false))
        },1200)

    }
}
