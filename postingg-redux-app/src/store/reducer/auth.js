import * as actionTypes from '../actions/actionTypes';

const initialState = {
    signup : true
}

const reducer = (state = initialState, action) =>{

    switch(action.type) {
        case (actionTypes.SWITCH_AUTH):
            return{
                ...state,
                signup : !state.signup
            }
        default: return {
            ...state
        }
    }
}

export default reducer;