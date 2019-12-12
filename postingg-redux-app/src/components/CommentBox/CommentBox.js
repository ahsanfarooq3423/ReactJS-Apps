import React from 'react';
import Comment from './Comment/Comment'
import classes from './CommentBox.module.css';

const commentbox = () => {
    return(
        <div className = {classes.main}>
            <div className = {classes.title}>Comments</div>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>

            

        </div>
    )
}

export default commentbox;