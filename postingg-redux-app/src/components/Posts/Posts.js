import React from 'react';
import Aux from '../../containers/hoc/Aux/Aux';
import Jumbrotron from './Jumbotron/Jumbotron';
import PostDesc from './PostDesc/PostDesc';
import PostCard from './PostCard/PostCard';
import PostList from './PostList/PostList';
import { withRouter } from 'react-router-dom';
import * as postsActions from '../../store/actions/index';
import { connect } from 'react-redux';
import classes from './Posts.module.css';

const posts = (props) => {

    let users = {};
    if(props.posts && props.users) {
        props.posts.map(post => {
            props.users.map(user => {
                if (post.authorId === user.id){
                    users[post.authorId] = user.name
                }
                return null
            })
            return null
        })
    }
    

    let show = (
        <div className = {classes.spinner}>
            <div className={classes.ldsfacebook}><div></div><div></div><div></div></div>
        </div>
    )
    if (props.posts){

    show = (

           <div className = {classes.postcard}>
               {props.posts.map(post =>  
                            <PostCard
                            post = {post}
                            {...props}
                            onViewPost = {props.onViewPost}
                            title = {post.title}
                            content = {post.content}
                            src = {post.picUrl}
                            key = {post.postId}
                            author = {users[post.authorId]}
                              />
                      )}                
           </div>
    )
}

    if (props.view === 'list') {
        show = (
            <Aux>
                {props.posts.map(post => {
                    return <PostList
                                onViewPost = {props.onViewPost}
                                {...props}
                                post = {post}
                                title = {post.title}
                                content = {post.content}
                                src = {post.picUrl}
                                key = {post.postId}
                                author = {users[post.authorId]} 
                                />
                })}
               
            </Aux>
        )
    }

    return(

        <div className = {classes.container}>
           <Jumbrotron/>
           <PostDesc
                view = {props.view} 
                onGridView = {props.onGridView}
                onListView = {props.onListView} 
                title = "All Posts"/>
            {show}
        </div>
    )
   
}

const mapStateToProps = state => {
    return {
        posts : state.postsState.posts,
        view : state.postsState.postsView,
        users : state.usersState.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGridView : () => dispatch(postsActions.gridView()),
        onListView : () => dispatch(postsActions.listView()),
        onViewPost : (post) => dispatch(postsActions.viewPost(post))
    }
}
    

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(posts));