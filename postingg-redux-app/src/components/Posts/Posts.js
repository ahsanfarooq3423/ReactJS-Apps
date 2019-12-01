import React from 'react';
import Jumbrotron from './Jumbotron/Jumbotron';
import PostDesc from './PostDesc/PostDesc';
import PostCard from './PostCard/PostCard';
import classes from './Posts.module.css';

const posts = (props) => {
    return(
        <div className = {classes.container}>
           <Jumbrotron/>
           <PostDesc title = "All Posts"/>
           
           <div className = {classes.postcard}>
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