import * as actionTypes from '../actions/actionTypes';


const initialState = {
    token : null,
    userId : null,
    username : null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                username : action.username
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token : action.userToken,
                userId : action.userId
            }
        default:
            return state;    
    }

}

export default reducer;


