import React, {Component} from 'react';
import Posts from '../../components/Posts/Posts';
import FullPost from '../../components/Posts/FullPost/FullPost';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from '../../axios';
import * as postActions from '../../store/actions/index';

class PostinggApp extends Component {

     componentWillMount() {
        this.props.onInitPosts();        
     }

     postContent = () => {
         axios.get("/posts/-LvGY9IM4t-C3Bf31MPh.json")
            .then(res => {
                console.log(res)
            })
            .catch (err => {
                console.log(err)
            })
     }


    render() {
        return(
            <div>
                <button onClick = {this.postContent}>sdf</button>
                <Route path = "/" exact component = {() => <Posts />}/>
                <Route path = "/fullpost" exact component = {() => <FullPost/>} />
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
        onInitPosts : (users) => dispatch(postActions.initPosts(users))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostinggApp));
