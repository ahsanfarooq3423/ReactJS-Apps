import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const startUsers = (users) => {
    return {
        type : actionTypes.START_USERS,
        users : users
    }
}

export const pushUsers = (updatedUsers) => {
    console.log('Updated Users',updatedUsers)
}

export const mutateUsers = (authorId, postId,users) => {
    console.log('Old Users:',users)
    return dispatch => {
        for (let i in users){
            if (users[i].id === authorId) {
                console.log(users[i].id,authorId)
                users[i].posts.push(postId)
                dispatch(pushUsers(users))
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




