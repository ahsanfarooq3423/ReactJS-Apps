import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';


const initialState = {
    users : null
}

const startUsers = (state, action) => {
    return updateObject(state, {users : action.users})
}


const reducer = (state = initialState, action) => {
        switch (action.type) {
          case (actionTypes.START_USERS): return startUsers(state, action)
          default: return {
              ...state
            }
        }
}

export default reducer;

