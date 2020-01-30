import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const startUsers = (users) => {
    return {
        type : actionTypes.START_USERS,
        users : users,
        currentUser : null
    }
}

export const pushUsers = (updatedUsers) => {
    return dispatch => {
        axios.post('users.json', updatedUsers)
            .then(res => {
                dispatch(startUsers(updatedUsers))
            })
            .catch(err => {
                console.log(err)
            })
    } 
}

export const deleteOldUsers = (updatedUsers) => {
    return dispatch => {
        axios.delete('users.json')
            .then(res => {
                console.log(res.data)
                dispatch(pushUsers(updatedUsers))    
            })
            .catch(err => console.log(err))
    }
}

export const mutateUsers = (authorId, postId,users) => {
    return dispatch => {
        for (let i in users){
            if (users[i].id === authorId) {
                    if (users[i].posts) {
                        users[i].posts.push(postId)
                    }
                    else {
                        users[i]['posts'] = [];
                        users[i]['posts'].push(postId)
                    }

                    dispatch(deleteOldUsers(users))
                }
                
                
            }
        }
    }


export const updateUsersPost = (post) => {
    return dispatch => {
        axios.get('/users.json')
            .then(res => {
                let users = res.data[Object.keys(res.data)];
                dispatch(mutateUsers(post.authorId, post.postId, users))
            })
            .catch(err => {
                console.log(err)
            })
    }
}


export const mutateDeletePostUsers = (users, post) => {
    return dispatch => {
        for (let i in users){
            if (users[i].id === post.authorId){
                let postId = post.postId;
                let posts = users[i].posts
                let updatedPosts = posts.filter(id => id !== postId )
                users[i].posts = updatedPosts;
                dispatch(deleteOldUsers(users))
            }
        }
    }
}


export const updateDeletePostUsers = (post) => {
    return dispatch => {
        axios.get("/users.json")
            .then(res => {
                let users = res.data[Object.keys(res.data)];
                dispatch(mutateDeletePostUsers(users,post));
            })
            .catch(err => {
                console.log(err)
            })
    }
}




