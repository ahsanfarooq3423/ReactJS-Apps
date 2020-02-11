import * as actionTypes from '../actions/actionTypes';


const initialState = {
    visible: false,
    screens : [],
    loading : false,
    screenPosted : false
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INPUT_TRUE:
            return {
                ...state,
                visible: true
            }
        case actionTypes.INPUT_FALSE:
            return {
                ...state,
                visible: false
            }
        default:
            return state;
    }
}

export default reducer;