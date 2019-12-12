import React from 'react';
import CommentBox from '../../CommentBox/CommentBox';
import TopBox from './TopBox/TopBox';
import ContentBox from './ContentBox/ContentBox';
import ButtonBox from './ButtonBox/ButtonBox';
import * as actionTypes from '../../../store/actions/index';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import classes from './FullPost.module.css';


const fullpost = (props) => {

    let users = {};
    if(props.posts && props.users) {
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
            <div className = {classes.leftcontainer}>
            <TopBox
                author = {users[props.fullpost.authorId]}
                timeStamp = {props.fullpost.timestamp}
                title = {props.fullpost.title}
                src = {props.fullpost.picUrl}/>
            <ContentBox content = {props.fullpost.content}/>
            <ButtonBox  
            delete = {() => {
                let to = "/"
                props.history.push(to)
                props.onEditPostSaveUsers(props.fullpost)
                props.onDeletePost(props.fullpost)}}
            {...props}/>
            </div>


           
                <CommentBox/>
       
            
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

const mapDispatchToProps = dispatch => {
    return {
        onDeletePost : (post) => dispatch(actionTypes.deletePost(post)),
        onEditPostSaveUsers : (post) => dispatch(actionTypes.updateDeletePostUsers(post)) 
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(fullpost));    

