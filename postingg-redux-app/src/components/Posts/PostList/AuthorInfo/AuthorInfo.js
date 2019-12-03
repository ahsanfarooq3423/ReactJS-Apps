import React from 'react';
import classes from './AuthorInfo.module.css';

const authorinfo = (props) => {
    return (
        <div className = {classes.author}>
            <div className = {classes.profileImg}></div>
            <div className = {classes.authorname}>{props.author}</div>
        </div>
    )
}

export default authorinfo;