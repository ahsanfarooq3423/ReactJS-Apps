import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = (username) => {
    return {
        type:  actionTypes.AUTH_START,
        username : username
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
                console.log(response)
            })
            .catch(err => console.log(err))
    }
}


