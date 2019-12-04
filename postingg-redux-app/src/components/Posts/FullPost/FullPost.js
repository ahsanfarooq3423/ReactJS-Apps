import React from 'react';
import TopBox from './TopBox/TopBox';
import ContentBox from './ContentBox/ContentBox';
import ButtonBox from './ButtonBox/ButtonBox';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import classes from './FullPost.module.css';


const fullpost = (props) => {

    let users = {};
    if(props.posts) {
        props.posts.map(post => {
            props.users.map(user => {
                if (post.authorId === user.id){
                    users[post.authorId] = user.name
                }
                return null
            })
            return null
        })
    }

    return(
        <div className = {classes.container}>
            <TopBox
                author = {users[props.fullpost.authorId]}
                timeStamp = {props.fullpost.timestamp}
                title = {props.fullpost.title}
                src = {props.fullpost.picUrl}/>
            <ContentBox content = {props.fullpost.content}/>
            <ButtonBox/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts : state.postsState.posts,
        users : state.usersState.users,
        fullpost : state.postsState.viewPost
    }
}

export default withRouter(connect(mapStateToProps)(fullpost));    

