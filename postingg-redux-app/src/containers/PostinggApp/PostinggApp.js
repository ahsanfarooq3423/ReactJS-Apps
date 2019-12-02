import React, {Component} from 'react';
import Posts from '../../components/Posts/Posts';
import FullPost from '../../components/Posts/FullPost/FullPost';

class PostinggApp extends Component {
    render() {
        return(
            <div>
                {/* <Posts/> */}
                <FullPost/>
            </div>
            
        )
    }
}

export default PostinggApp;
