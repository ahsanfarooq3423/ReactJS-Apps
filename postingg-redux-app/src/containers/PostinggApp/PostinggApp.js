import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Posts from '../../components/Posts/Posts';
import SignUp from '../../components/Auth/SignupAuth';
import Login from '../../components/Auth/LoginAuth';
import { connect } from 'react-redux';
import asyncComponent from '../hoc/asyncComponent/asyncComponent';
import { withRouter, Switch, Route } from 'react-router-dom';
import axios from '../../axios';
import * as postActions from '../../store/actions/index';

const asyncNewPost = asyncComponent(() => {
    return import('../../components/Posts/NewPost/NewPost')
})

const asyncEditPost = asyncComponent(() => {
    return import('../../components/Posts/EditPost/EditPost')
})

const asyncFullPost = asyncComponent(() => {
    return import('../../components/Posts/FullPost/FullPost')
})

 
class PostinggApp extends Component {

    state = {
        users : null,
        userName : null
    }

     componentDidMount() {
        this.props.onInitPosts();
        this.getUsersHandler();
        this.props.onAppStart();

     }


     getUsersHandler = () => {
        axios.get("/users.json")
        .then(res => {
            this.props.onStartUsers(res.data[Object.keys(res.data)])
        })
        .catch(err => {
            console.log(err)
        })
     }

     
    

    render() {
        let routes = (
            <Switch>
               <Route path = "/signup" exact component = {() => <SignUp/> }/>
               <Route path = "/login" exact component = {() => <Login/>  }/>
               <Route path = "/" exact component = {() => <Posts />}/>
               <Route path = "/fullpost" exact component = {asyncFullPost} /> 
               <Route path = "/newpost" exact component = {asyncNewPost}/>
            </Switch>
        )
        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path = "/editpost" exact component = {asyncEditPost}/>
                    <Route path = "/newpost" exact component = {asyncNewPost}/>
                    <Route path = "/" exact component = {() => <Posts />}/>
                    <Route path = "/fullpost" exact component = {asyncFullPost} /> 
                </Switch>
            )
        }
        return(
            <div>
               <NavBar isAuth = {this.props.isAuthenticated}/>
               
               {routes}
               
            </div>
            
        )
    }
}

        

const mapStateToProps = state => {
    return {
        posts : state.postsState.posts,
        view : state.postsState.postsView,
        users : state.usersState.users,
        isAuthenticated : state.authState.token !== null,
        userId : state.authState.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPosts : () => dispatch(postActions.initPosts()),
        onStartUsers : (users) => dispatch(postActions.startUsers(users)),
        onAppStart : () => dispatch(postActions.authCheckState())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostinggApp));
