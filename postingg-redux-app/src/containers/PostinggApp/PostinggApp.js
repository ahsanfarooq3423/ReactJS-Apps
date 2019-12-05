import React, {Component} from 'react';
import Posts from '../../components/Posts/Posts';
import FullPost from '../../components/Posts/FullPost/FullPost';
import NewPost from '../../components/Posts/NewPost/NewPost';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from '../../axios';
import * as postActions from '../../store/actions/index';


class PostinggApp extends Component {

    state = {
        users : null
    }

     componentDidMount() {
        this.props.onInitPosts();
        //local state method instead on of using the redux but dispathing in redux
        this.getUsersHandler();
     }


     getUsersHandler = () => {
        axios.get("/users/-LvGYkKGjz3BNQTsrAPb.json")
        .then(res => {
            this.props.onStartUsers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
     }

    render() {
        return(
            <div>
               <Route path = "/" exact component = {() => <NewPost />}/>
            </div>
            
        )
    }
}

 {/* <Route path = "/" exact component = {() => <Posts />}/>
                <Route path = "/fullpost" exact component = {() => <FullPost/>} /> */}

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
