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

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    return {
        type : actionTypes.LOGOUT
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
                localStorage.setItem("token", response.data.idToken)
                localStorage.setItem("userId",response.data.localId)
                dispatch(authSuccess(response.data.idToken, response.data.localId))
            })
            .catch(err => console.log(err))
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem("userId");

        if (!token) {
            dispatch(logout())
        } else {
            dispatch(authSuccess(token , userId))
        }
    }
}


