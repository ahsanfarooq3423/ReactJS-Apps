import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    token : null,
    userId : null,
    error : null,
    loading : null,
    signup : true,
    currentUser : null
}

const authStart = (state) => {
    return updateObject(state, {error : null, loading : null})
}

const authSuccess = (state, action) => {
    return updateObject(state, {token : action.idToken, userId : action.localId, error : null, loading : false})
}

const authFail = (state, action) => {
    return updateObject(state, {error : action.error, loading : false})
}

const switchAuth = (state) => {
    return updateObject(state, {signup : !state.signup})
}

const authLogout = (state) => {
    return updateObject(state, {token : null, userId :null })
}



const reducer = (state = initialState, action) =>{

    switch(action.type) {
       
        case (actionTypes.AUTH_START): 
            return{
                ...state,
                error : null,
                loading : true,
                currentUser : action.name
            }

        case (actionTypes.AUTH_SUCCESS): 
        {
            return {
                ...state,
                token : action.idToken,
                userId : action.localId,
                error : null,
                loading : false
            }
        }
        case (actionTypes.AUTH_FAIL): 
        {
            return {
                ...state,
                error : action.error,
                loading : false 
            }
         }
        case (actionTypes.SWITCH_AUTH): 
            return{
                ...state,
                signup : !state.signup
            }
        case (actionTypes.AUTH_LOGOUT):
            return {
                ...state,
                token : null,
                userId :null 
            }
        default: return {
            ...state
        }
    }
}

export default reducer;