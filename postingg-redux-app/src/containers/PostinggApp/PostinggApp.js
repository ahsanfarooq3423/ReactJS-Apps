import React, {Component} from 'react';
import Posts from '../../components/Posts/Posts';
import FullPost from '../../components/Posts/FullPost/FullPost';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class PostinggApp extends Component {

    state = {

    }

    render() {
        return(
            <div>
                <Route path = "/" exact component = {Posts}/>
                <Route path = "/fullpost" exact component = {FullPost} />
                

            </div>
            
        )
    }
}


export default PostinggApp;
