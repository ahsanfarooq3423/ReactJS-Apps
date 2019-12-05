import React from 'react';
import NewTitle from './NewTitle/NewTitle';
import NewContent from './NewContent/NewContent';
import classes from './NewPost.module.css';

const newpost = () => {
    return(
        <div className = {classes.main}>
            <h1 className = {classes.header}>New Post:</h1>
            <NewTitle/>
            <NewContent/>
        </div>
    )
}

export default newpost;