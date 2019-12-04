import React, {Component} from 'react';
import Posts from '../../components/Posts/Posts';
import FullPost from '../../components/Posts/FullPost/FullPost';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PostinggApp extends Component {

    state = {
        usersMapping : null
    }

     componentWillMount() {
        let users = [];
        this.props.posts.map(post => {
            this.props.users.map(user => {
                if (post.authorId === user.id){
                    users[post.authorId] = user.name
                }
                return null
            })
            this.setState({usersMapping: users})
            return null
        })
     }


    render() {
        return(
            <div>
                <Route path = "/" exact component = {() => <Posts usersMapping = {this.state.usersMapping}/>}/>
                <Route path = "/fullpost" exact component = {() => <FullPost usersMapping = {this.state.usersMapping}/>} />
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

export default withRouter(connect(mapStateToProps)(PostinggApp));
