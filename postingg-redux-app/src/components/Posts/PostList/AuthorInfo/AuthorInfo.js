import React from 'react';
import classes from './AuthorInfo.module.css';

const authorinfo = () => {
    return (
        <div className = {classes.author}>
            <div className = {classes.profileImg}></div>
            <div className = {classes.authorname}>Ahsan Farooq</div>
        </div>
    )
}

export default authorinfo;