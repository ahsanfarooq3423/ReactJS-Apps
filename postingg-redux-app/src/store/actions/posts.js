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


export const newPost = (newPost, posts, users) => {
    console.log(newPost);
    console.log(posts);
    console.log(users);
    let date = new Date();
    let stringDate = date.toDateString();
    newPost.timestamp =  stringDate;  
    
    return {
        type : actionTypes.NEW_POST,
        newPost : newPost
    }
}



export const submitPost = (post) => {
    return dispatch => {
        axios.post("posts/-LvGY9IM4t-C3Bf31MPh.json", post)
            .then(res => {
                console.log(res)
                dispatch(newPost(post))
            })
            .catch( err => {
                console.log(err)
            } )
    }
}





