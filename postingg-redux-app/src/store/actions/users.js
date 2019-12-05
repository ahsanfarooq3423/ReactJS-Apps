import * as actionTypes from './actionTypes';


export const startUsers = (users) => {
    return {
        type : actionTypes.START_USERS,
        users : users
    }
}


