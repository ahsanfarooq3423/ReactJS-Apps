import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    posts : null,
    postsView : 'grid',
    usersMapping : null,
    
    viewPost : {
        title : "A Way to Zillion Parks: Complete Tour Guide for that era",
        content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make \b a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  \b It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we  \buse it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        postId : '54uu',
        authorId : '45a',
        timestamp: 'Mon Dec 02 2019 21:55:16',
        picUrl : "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        
    },
    newPost : null
    
}

const gridView = (state) => {
    return updateObject(state, {postView : 'grid'})
}

const listView = (state) => {
    return updateObject(state, {postView : 'list'})
}

const viewPost = (state, action) => {
    return updateObject(state, {viewPost : action.post})
}

const setPosts = (state, action) => {
    return updateObject(state, {posts : action.posts})
}

const submitPost = (state, action) => {
    return updateObject(state, {newPost : action.newPost})
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case (actionTypes.GRID_VIEW) : return gridView(state)
        case (actionTypes.LIST_VIEW) : return listView(state)
        case (actionTypes.VIEW_POST): return viewPost(state, action)
        case (actionTypes.SET_POSTS):  return setPosts(state, action)
        case (actionTypes.SUBMIT_POST): return submitPost(state, action)
        default: return {
            ...state
        }
        
    }
}

export default reducer;    

