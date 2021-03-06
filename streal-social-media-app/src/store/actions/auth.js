import axios from 'axios';
import * as actionTypes from './actionTypes';
import streal_axios from '../../axios';
import * as actions from './index';


export const authStart = (username) => {
    return {
        type: actionTypes.AUTH_START,
        username: username
    }
}

export const authSuccess = (userToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userToken: userToken,
        userId: userId
    }
}
export const loadingTrue = () => {
    return {
        type : actionTypes.LOADING_TRUE
    }
}

export const loadingFalse = () => {
    return {
        type : actionTypes.LOADING_FALSE
    }
}


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    return {
        type: actionTypes.LOGOUT
    }
}


//
export const setUsers = (users) => {
    return {
        type: actionTypes.SET_USERS,
        users: users
    }
}

export const initUsers = () => {
    return dispatch => {
        streal_axios.get('/users.json')
            .then(res => {
                dispatch(actions.initScreens())
                dispatch(setUsers(res.data[Object.keys(res.data)]))
                dispatch(getUserNameOnStart())
                dispatch(loadingFalse())
            })
            .catch(err => console.log(err))
    }
}

export const postUsers = (users) => {
    return dispatch => {
        streal_axios.post('/users.json', users)
            .then(res => {
                dispatch(initUsers())
            })
            .catch(err => console.log(err))
    }
}


export const deleteUsers = (users) => {
    return dispatch => {
        streal_axios.delete('/users.json')
            .then(res => {
                dispatch(postUsers(users))
            })
            .catch(err => console.log(err))
    }
}

export const addNewUser = (user) => {
    return dispatch => {
        streal_axios.get('/users.json')
            .then(res => {
                let users = res.data[Object.keys(res.data)];
                users.push(user)
                dispatch(deleteUsers(users))
            })
            .catch(err => console.log(err))
    }
}


export const auth = (username, email, password, isSignup) => {
    const dateSeconds = Date.now()
    return dispatch => {
        dispatch(authStart(username))

        const authData = {
            email: email,
            password: password
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBTP8nDxjgxADmixLEhZ4NGQxL07yK0XOU'
        if (isSignup) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBTP8nDxjgxADmixLEhZ4NGQxL07yK0XOU"
        }

        axios.post(url, authData)
            .then(response => {
                localStorage.setItem("token", response.data.idToken)
                localStorage.setItem("userId", response.data.localId)

                if (isSignup) {
                    const user = {
                        name: username,
                        email: email,
                        userId: response.data.localId,
                        bio: '',
                        website: '',
                        dateSeconds: dateSeconds,
                        postsIds: []
                    }
                    dispatch(addNewUser(user))
                }

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
            dispatch(authSuccess(token, userId))
        }
    }
}

export const setUserNameOnStart = userDoc => {
    return {
        type: actionTypes.SET_USERNAME,
        name: userDoc.name,
        userData: userDoc
    }
}

export const setNoUserOnStart = () => {
    return {
        type: actionTypes.NO_USERNAME
    }
}


export const getUserNameOnStart = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem("userId");
        if (userId && token) {
            streal_axios.get('/users.json')
                .then(res => {
                    let users = res.data[Object.keys(res.data)]
                    const userDoc = users.find(singleUser => singleUser.userId === userId)
                    dispatch(setUserNameOnStart(userDoc))
                })
        } else {
            dispatch(setNoUserOnStart())
        }
    }
}


export const updateUserInfo = (userData) => {
    return dispatch => {
        dispatch(loadingTrue())
        let {name, bio, location, website} = userData;
        const userId = localStorage.getItem('userId');
        if (userId) {
            streal_axios.get('/users.json')
                .then(res => {
                    let users = res.data[Object.keys(res.data)]
                    let currentUserIndex = users.findIndex(user => {
                        return user.userId === userId
                    })
                    let currentUser = {...users[currentUserIndex], name, bio, location, website}
                    let updatedUsers = users.filter(user => {
                        return user.userId !== userId
                    })
                    updatedUsers.push(currentUser);
                    dispatch(deleteUsers(updatedUsers));
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}

