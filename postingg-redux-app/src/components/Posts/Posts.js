import React from 'react';
import Aux from '../../containers/hoc/Aux/Aux';
import Jumbrotron from './Jumbotron/Jumbotron';
import PostDesc from './PostDesc/PostDesc';
import PostCard from './PostCard/PostCard';
import PostList from './PostList/PostList';
import { connect } from 'react-redux';
import classes from './Posts.module.css';

const posts = (props) => {

    let show = (
           
           <div className = {classes.postcard}>
               {props.posts.map(post => {
                   return <PostCard
                            title = {post.title}
                            content = {post.content}
                            src = {post.picUrl}
                            key = {post.postId}  />
               })}                
           </div>
    )

    if (props.view === 'list') {
        show = (
            <Aux>
                {props.posts.map(post => {
                    return <PostList
                                title = {post.title}
                                content = {post.content}
                                src = {post.picUrl}
                                key = {post.postId}
                            />
                })}
                {/* <PostList />
                <PostList/>
                <PostList/>
                <PostList/>
                <PostList/>
                <PostList/>
                <PostList/> */}
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
    console.log(state);
    return {
        posts : state.postsState.posts,
        view : state.postsState.postsView
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGridView : () => dispatch({type : "GRID_VIEW"}),
        onListView : () => dispatch({type : "LIST_VIEW"})
        
    }
}
    

export default connect(mapStateToProps, mapDispatchToProps)(posts);