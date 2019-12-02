import React from 'react';
import Jumbrotron from './Jumbotron/Jumbotron';
import PostDesc from './PostDesc/PostDesc';
import PostCard from './PostCard/PostCard';
import PostList from './PostList/PostList';
import classes from './Posts.module.css';

const posts = (props) => {
    return(
        <div className = {classes.container}>
           <Jumbrotron/>
           <PostDesc title = "All Posts"/>

            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
            <PostList/>
           
        
           
           <div className = {classes.postcard}>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                
                
           </div>
           
           
        </div>
    )
   
}

export default posts;