import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const startUsers = (users) => {
    return {
        type : actionTypes.START_USERS,
        users : users
    }
}

export const pushUsers = (updatedUsers) => {
    return dispatch => {
        axios.post('users.json', updatedUsers)
            .then(res => {
                console.log(res.data)
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
            .then(res => dispatch(pushUsers(updatedUsers)))
            .catch(err => console.log(err))
    }
}

export const mutateUsers = (authorId, postId,users) => {
    console.log('Old Users:',users)
    return dispatch => {
        for (let i in users){
            if (users[i].id === authorId) {
                console.log(users[i].id,authorId)
                users[i].posts.push(postId)
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




