import React from 'react';
import AuthorInfo from './AuthorInfo/AuthorInfo';
import TitleInfo from './TitleInfo/TitleInfo';
import classes from './PostList.module.css';

const postlist = () => {
    return (
        <div className  = {classes.main}>
            <AuthorInfo/>
             <div className = {classes.imgdiv}>
                <img src = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
                <TitleInfo/>
            </div>

            
        </div>
    )
}

export default postlist;