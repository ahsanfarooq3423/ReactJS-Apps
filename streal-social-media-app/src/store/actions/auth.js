import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = (username) => {
    return {
        type:  actionTypes.AUTH_START,
        username : username
    }
}

export const authSuccess = (userToken, userId) => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        userToken : userToken,
        userId : userId
    }
}


export const auth = (username, email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart(username))

        const authData = {
            email : email,
            password : password
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBTP8nDxjgxADmixLEhZ4NGQxL07yK0XOU'
        if (isSignup) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBTP8nDxjgxADmixLEhZ4NGQxL07yK0XOU"
        }

        axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data.idToken, response.data.localId))
            })
            .catch(err => console.log(err))
    }
}

