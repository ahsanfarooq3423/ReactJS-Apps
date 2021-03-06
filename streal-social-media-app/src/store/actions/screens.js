import * as actionTypes from './actionTypes';
import streal_axios from '../../axios';

const timeFormatter = date => {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

// console.log(aDay)

// var d = Date.now();
// console.log(d)

// d = 1581430475105

// let e = Date.now() - d
// console.log(e)

// e = 44281

// console.log(timeSince(new Date(Date.now()-e)));


export const inputTrue = () => {
    return{
        type : actionTypes.INPUT_FALSE
    }
}

export const inputFalse = () => {
    return{
        type : actionTypes.INPUT_FALSE
    }
}


export const loadingBeforePosted = bool => {
    return {
        type : actionTypes.LOADING_POSTED,
        bool : bool
    }
}

export const setScreens = (screens) => {
    return {
        type : actionTypes.SET_SCREENS,
        screens : screens
    }
}

export const screensWithUsers = (screens) => {
    return dispatch => {
    streal_axios.get('/users.json')
        .then(response => {
            const usersArray = response.data[Object.keys(response.data)]
            const final_Array = screens.map(screen => {
                const indexedValue = usersArray.findIndex(user => {
                    return user.userId === screen.userId
                })
                screen.userName = usersArray[indexedValue].name;
                // console.log(screen)
                return screen
            })
            // console.log(final_Array)
            dispatch(setScreens(final_Array))
        
        })
}}

export const initScreens = () => {
    return dispatch => {
        streal_axios.get('/posts.json')
            .then(res => {
                // dispatch(setScreens(res.data[Object.keys(res.data)]))
                dispatch(screensWithUsers(res.data[Object.keys(res.data)]))
            })
            .catch(err => console.log(err))
    }
}

export const postScreens = (screens) => {
    return dispatch => {
        streal_axios.post('/posts.json', screens)
            .then(res => {
                dispatch(initScreens())
            })
            .catch(err => console.log(err))
    }
}


export const deleteScreens = (screens) => {
    return dispatch => {
        streal_axios.delete('/posts.json')
            .then(res => {
                dispatch(postScreens(screens))
            })
            .catch(err => console.log(err))
    }
}

export const postScreen = (screenContent, userId) => {
    const dateSeconds = Date.now()
    return dispatch => {
        dispatch(loadingBeforePosted(true))
        const screen = {
            screenContent : screenContent,
            userId : userId,
            likes : 0,
            dateSeconds : dateSeconds
        }
        streal_axios.get('posts.json') 
            .then(res => {
                dispatch(loadingBeforePosted(false))
                if (res.data) {
                    let  screens = res.data[Object.keys(res.data)];
                    screens.push(screen)
                    dispatch(deleteScreens(screens))
                } else {
                    console.log('in the else statement----')
                    const screens = [];
                    screens.push(screen);
                    streal_axios.post('posts.json', screens)
                        .then(response => {
                            return;
                        })
                        .catch(err => console.log(err))
                }

            })
            .catch(err => console.log(err))
    }
} 



