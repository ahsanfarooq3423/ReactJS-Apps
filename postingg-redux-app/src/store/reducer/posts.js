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
        default: return {
            ...state
        }
        
    }
}

export default reducer;    


// [
//     {
//         title : "A Way to Zillion Parks: Complete Tour Guide for that era",
//         content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make \b a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  \b It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we  \buse it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//         postId : '54uu',
//         authorId : '45a',
//         timestamp: 'Mon Dec 02 2019 21:55:16',
//         picUrl : "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        
//     },
//     {
//         title : "You are reading this because You're Addicted to Information",
//         content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make \b a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  \b It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we  \buse it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//         postId : '44de',
//         authorId : '87q',
//         timestamp: 'Sun Dec 01 2019 21:45:16',
//         picUrl : "https://images.unsplash.com/photo-1501213391419-2eca7f7e29bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        
//     },
//     {
//         title : "Library Cookbooks Were All we Needed for a Family Voyage",
//         content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make \b a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  \b It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we  \buse it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//         postId : '49ae',
//         authorId : '45a',
//         timestamp: 'Mon Dec 02 2019 21:55:16',
//         picUrl : "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2053&q=80"
        
//     },
//     {
//         title : "Why Tesla CyberTruck might flop",
//         content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make \b a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  \b It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we  \buse it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//         postId : '23mq',
//         authorId : '43v',
//         timestamp: 'Tues Dec 03 2019 21:55:16',
//         picUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQ4TQqbmb9gMJRiff2VTu2nG2_KIa0sdjj91WWtHqe9f4Mbawe"
        
//     },
//     {
//         title : "The Endgame for LinkedIn is Coming",
//         content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make \b a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  \b It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we  \buse it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//         postId : '65hj',
//         authorId : '62n',
//         timestamp: 'Fri Nov 22 2019 21:55:16',
//         picUrl : "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
        
//     },
// ]