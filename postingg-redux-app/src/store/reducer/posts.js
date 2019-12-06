import * as actionTypes from '../actions/actionTypes';


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
        
    }
    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case (actionTypes.GRID_VIEW) : {
            return {
                ...state,
                postsView : 'grid'
            }
        }
        case (actionTypes.LIST_VIEW) : {
            return {
                ...state,
                postsView : 'list'
            }
        }
        case (actionTypes.VIEW_POST): {
            return{
                ...state,
                viewPost : action.post
            }
        }

        case (actionTypes.SET_POSTS): {
            return {
                ...state,
                posts : action.posts
            }
        }

        case (actionTypes.NEW_TITLE) : {
            let newPost = {
                title : action.title,

            }
            return {
                ...state
            }
        }
        default: return {
            ...state
            
        }
        
    }
}

export default reducer;    

