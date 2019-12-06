import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const gridView = () => {
    return {
        type : actionTypes.GRID_VIEW
    }
}

export const listView = () => {
    return {
        type : actionTypes.LIST_VIEW
    }
}

export const viewPost = (post) => {
    return {
        type : actionTypes.VIEW_POST,
        post : post
    }
}

export const setPosts = (posts) => {

    return {
        type : actionTypes.SET_POSTS,
        posts : posts
    }
}


export const initPosts = () => {
    return dispatch => {
        axios.get("/posts/-LvGY9IM4t-C3Bf31MPh.json")
            .then(res => {
                dispatch(setPosts(res.data))
            })
            .catch (err => {
                console.log(err)
            })
    }
}

export const newPostTitle = (event) => {
    return {
        type : actionTypes.NEW_TITLE,
        title : event.target.value
    }
}
