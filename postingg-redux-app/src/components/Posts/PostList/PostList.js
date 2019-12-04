import React from 'react';
import AuthorInfo from './AuthorInfo/AuthorInfo';
import TitleInfo from './TitleInfo/TitleInfo';
import classes from './PostList.module.css';

const postlist = (props) => {
    console.log(props)
    return (
        <div onClick = {() => {
            props.onViewPost(props.post)
            let to = "/fullpost"
            props.history.push(to)
        }} className  = {classes.main}>
            <AuthorInfo {...props}/>
             <div className = {classes.imgdiv}>
                <img alt = "landscape" src = {props.src}/>
                <TitleInfo {...props}/>
            </div>

            
        </div>
    )
}

export default postlist;