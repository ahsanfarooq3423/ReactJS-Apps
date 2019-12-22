import * as actionTypes from './actionTypes';
import axios from 'axios';
import postingg_axios from '../../axios';

export const authStart = () => {
    return{
        type : actionTypes.AUTH_START
    }
}

export const authSuccess = (idToken, localId) => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        idToken : idToken,
        localId : localId
    }
}

export const authFail = (error) => {
    return {
        type : actionTypes.AUTH_FAIL,
        error : error
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    return {
        type : actionTypes.AUTH_LOGOUT
    }
}
 
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(()=> {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const startUsers = (users) => {
    return {
        type : actionTypes.START_USERS,
        users : users
    }
}


export const updatedUserDB = (updatedUsers) => {
    return dispatch => {
        postingg_axios.post('users.json', updatedUsers)
            .then(res => {
                dispatch(startUsers())
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const deleteOldUsers = (updatedUsers) => {
    return dispatch => {
        postingg_axios.delete('users.json')
            .then(res => dispatch(updatedUserDB(updatedUsers)))
            .catch(err => console.log(err))
    }
}

export const getUsersDB = (idToken, name) => {
    return dispatch => {
        let newUser = {
            id : idToken,
            name : name,
            posts : [1]
        }
        postingg_axios.get('users.json')
            .then(res => {
                let users = res.data[Object.keys(res.data)];
                users.push(newUser);
                dispatch(deleteOldUsers(users));
            })
            .catch(err => {
                console.log(err)
            })

    }
}

export const auth  = (email, password, isSignup, name) => {
    
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email : email,
            password : password,
            returnSecureToken : true
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCMQf7r1hmO24rlvpgq3MeAqg8bdXrYkKM"
        if (isSignup) {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCMQf7r1hmO24rlvpgq3MeAqg8bdXrYkKM";
        }
        axios.post(url, authData)
            .then(response => {
                localStorage.setItem("token", response.data.idToken)
                localStorage.setItem("userId",response.data.localId)
                dispatch(authSuccess(response.data.idToken, response.data.localId))
                dispatch(checkAuthTimeout(response.data.expiresIn))
                if (isSignup){
                    dispatch(getUsersDB(response.data.localId, name ))
                }
                

            })
            .catch(err => {
                console.log(err)
                dispatch(authFail(err.response.data.error))
            })
        
    }
}


export const switchAuth = () => {
    return {
        type : actionTypes.SWITCH_AUTH
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem("userId")
        if (!token) {
            console.log('in no token')
            dispatch(logout())
        } else {
            dispatch(authSuccess(token, userId))
        }
    }
}

