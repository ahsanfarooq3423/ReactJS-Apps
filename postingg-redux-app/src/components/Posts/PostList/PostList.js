import React from 'react';
import AuthorInfo from './AuthorInfo/AuthorInfo';
import TitleInfo from './TitleInfo/TitleInfo';
import classes from './PostList.module.css';

const postlist = (props) => {
    return (
        <div className  = {classes.main}>
            <AuthorInfo {...props}/>
             <div className = {classes.imgdiv}>
                <img alt = "landscape" src = {props.src}/>
                <TitleInfo {...props}/>
            </div>

            
        </div>
    )
}

export default postlist;