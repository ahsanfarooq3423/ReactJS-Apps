import React, {Component} from 'react';
import NewTitle from './NewTitle/NewTitle';
import NewContent from './NewContent/NewContent';
import NewButtons from './NewButtons/NewButtons';
import {connect} from 'react-redux';
import * as postActions from '../../../store/actions/index';
import classes from './NewPost.module.css';



class NewPost extends  Component {

    state = {
        newPost : {
            title: null,
            content : null,
            postId : '48ju',
            authorId : '43v',
            timestamp : null,
            picUrl : "https://images.unsplash.com/photo-1566640241039-2443899336c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        }
    }

    titleChangeHanlder =  (event) => {
        let state = {...this.state}
        let newPost = {...state.newPost};
        let title = event.target.value;
        newPost.title = title
        this.setState({newPost})
    }

    contentChangeHandler = (event) => {
        let state = {...this.state}
        let newPost = {...state.newPost};
        let content = event.target.value;
        newPost.content = content
        this.setState({newPost})
        console.log(this.state)
    }

    render() {
        return(
            <div className = {classes.main}>
            <h1 className = {classes.header}>New Post:</h1>
            <NewTitle titleChange = {this.titleChangeHanlder}/>
            <NewContent contentChange = {this.contentChangeHandler} />
            <NewButtons/>
        </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        onTitleChange : (event) => dispatch(postActions.newPostTitle(event))
    }
}


export default connect(null, mapDispatchToProps)(NewPost);