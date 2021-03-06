import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,

    freqCount: null,
    nGramCount: null
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.SET_FREQ_COUNT):
            return {
                ...state,
                freqCount: action.data
            }
        case (actionTypes.SET_NGRAM_COUNT):
            return {
                ...state,
                nGramCount : action.data
            }
        case (actionTypes.RESOURCE_LOADING): {
            return {
                ...state,
                loading: action.value
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default reducer;