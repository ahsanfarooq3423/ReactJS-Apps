import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Posts from '../../components/Posts/Posts';
import FullPost from '../../components/Posts/FullPost/FullPost';
import NewPost from '../../components/Posts/NewPost/NewPost';
import EditPost from '../../components/Posts/EditPost/EditPost';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from '../../axios';
import * as postActions from '../../store/actions/index';


import Signup from '../../components/Auth/Signup/Signup';


class PostinggApp extends Component {

    state = {
        users : null
    }

     componentDidMount() {
        this.props.onInitPosts();
        this.getUsersHandler();
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
        return(
            <div>
                <Signup/>
               {/* <NavBar/>
               <Route path = "/editpost" exact component = {() => <EditPost/>}/>
               <Route path = "/newpost" exact component = {() => <NewPost />}/>
               <Route path = "/" exact component = {() => <Posts />}/>
               <Route path = "/fullpost" exact component = {() => <FullPost/>} />  */}
            </div>
            
        )
    }
}

                

const mapStateToProps = state => {
    return {
        posts : state.postsState.posts,
        view : state.postsState.postsView,
        users : state.usersState.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPosts : () => dispatch(postActions.initPosts()),
        onStartUsers : (users) => dispatch(postActions.startUsers(users))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostinggApp));
