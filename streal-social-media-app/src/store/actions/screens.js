import * as actionTypes from './actionTypes';
import axios from '../../axios';

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
    return dispatch => {
        dispatch(loadingBeforePosted(true))
        const screen = {
            screenContent : screenContent,
            userId : userId,
            likes : 0
        }
    
        const screenList = [];
        screenList.append(screen);
        axios.post('/posts', screenList)
            .then(response => {
                dispatch(loadingBeforePosted(false))
                dispatch(screenPosted())
            })
        // axios.get('/posts')
        //     .then(response => {
        //         const screensList = response.data
        //         return screensList.append(screen)
        //     })
        //     .then(screenList => {
        //         return axios.post('/posts', screenList)
        //     })
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(err => console.log(err))
    }
} 

