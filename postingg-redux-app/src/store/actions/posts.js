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
        axios.get("/posts.json")
            .then(res => {
                    dispatch(setPosts(res.data[Object.keys(res.data)]))
                
            })
            .catch (err => {
                console.log(err)
            })
    }
}

export const postPosts = (posts) => {
    return dispatch => {
        axios.post("/posts.json", posts)
        .then(res => {
            console.log(res.data)
            dispatch(initPosts())
        })
    }

        
    }



export const deletePosts = (posts) => {
    return dispatch => {
        axios.delete("/posts.json")
            .then(res => {
                dispatch(postPosts(posts))
            })
            .catch(err => {
                console.log(err)
            })
    }
}



export const submitPost = (post) => {

    let dateObj  = new Date(); 
    let date =  dateObj.toString();
    post.timestamp = date.toString();
    return dispatch => {
        axios.get('posts.json')
            .then(res => {
                let  posts = res.data[Object.keys(res.data)];
                posts.push(post)
                dispatch(deletePosts(posts))
            })
            .catch (err => {
                console.log(err)
            })
    }
}








