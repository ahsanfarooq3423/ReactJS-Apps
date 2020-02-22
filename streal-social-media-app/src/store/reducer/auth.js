import * as actionTypes from '../actions/actionTypes';


const initialState = {
    token : null,
    userId : null,
    username : 'Jonnathan',
    userData : null,
    users : []
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
        case actionTypes.LOGOUT:
            return {
                ...state,
                token : null,
                userId : null
            }
        case actionTypes.SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case actionTypes.NO_USERNAME:
            return {
                ...state,
                token : null,
                userId : null,
                username : null
            }
        case actionTypes.SET_USERNAME:
            return {
                ...state,
                username : action.name,
                userData : action.userData

            }
        default:
            return state;    
    }

}

export default reducer;


