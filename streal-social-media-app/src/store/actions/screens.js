import * as actionTypes from './actionTypes';
import streal_axios from '../../axios';
import axios from 'axios';

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

export const screenPosted = () => {
    return {
        type : actionTypes.SCREEN_POSTED
    }
}

export const loadingBeforePosted = bool => {
    return {
        type : actionTypes.LOADING_POSTED,
        bool : bool
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
    
        const screenList = [];
        screenList.push(screen);
        streal_axios.post('posts.json', screenList) 
            .then(response => {
                dispatch(loadingBeforePosted(false))
                dispatch(screenPosted())
            })
            .catch(err => console.log(err))
    }
} 
