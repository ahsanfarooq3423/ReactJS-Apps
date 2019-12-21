import React, {Component} from 'react';
import NewTitle from './NewTitle/NewTitle';
import NewContent from './NewContent/NewContent';
import NewButtons from './NewButtons/NewButtons';
import Modal from '../../UI/Modal/Modal';
import Login from '../../Auth/LoginAuth';
import Signup from '../../Auth/SignupAuth';
import Aux from '../../../containers/hoc/Aux/Aux'
import {connect} from 'react-redux';
import { withRouter } from 'react-router'; 
import * as postActions from '../../../store/actions/index';
import classes from './NewPost.module.css';



class NewPost extends  Component {

    state = {
        newPost : {
            title: null,
            content : null,
            postId : '48ju',
            authorId : 'Sh3msDE5meN5nBX3SrPjizfyyuI2',
            authorName : null,
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
    }



   
    componentDidMount = () => {
        let userName = null;
        if (this.props.isAuthenticated){
            
            for (let i in this.props.users) {
                if (this.props.users[i].id === this.props.auth.userId){
                    userName = this.props.users[i].name
                } 
            }
            userName = userName.charAt(0).toUpperCase() + userName.slice(1);
            
        }

        this.setState({posts: this.props.posts, users : this.props.users})
        let copyState = {...this.state}
        let newPost = {...copyState.newPost}
        newPost.postId = Math.random().toString(36).slice(6)
        newPost.authorName = userName
        newPost.authorId = this.props.currentUser.userId
        this.setState({newPost})

    }

    redirectToPostsHandler = () => {
        this.props.history.push("/")
    }

    render() {
        let auth = (
            <div>
                <h1>Please Login of SignUp to continue...</h1>
                <div className = {classes.auth}>
                    <Login/>
                    <Signup/>
                </div>
            </div>
           
        )

        return(
            <div className = {classes.main}>
                
            
            {this.props.isAuthenticated ? <Aux>
                <h1 className = {classes.header}>New Post:</h1>
            <NewTitle titleChange = {this.titleChangeHanlder}/>
            <NewContent contentChange = {this.contentChangeHandler} />
            <NewButtons 
                discardPost = {() => {
                    let to = "/"
                    this.props.history.push(to)
                }}
                submitPost = {() =>{
                let to = "/"
                this.props.history.push(to)
                this.props.onSubmitNewPostUsers(this.state.newPost)
                this.props.onSubmitNewPost(this.state.newPost)}}/>
            </Aux>: <Modal show  close = {this.redirectToPostsHandler}> {auth} </Modal>
            }
            
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users : state.usersState.users,
        currentUser : state.authState,
        auth : state.authState,
        isAuthenticated : state.authState.token !== null
    }
}


const mapDispatchToProps = dispatch => {

    return {
        onSubmitNewPost : (post) => dispatch(postActions.submitPost(post)),
        onSubmitNewPostUsers : (post) => dispatch(postActions.updateUsersPost(post))
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPost));