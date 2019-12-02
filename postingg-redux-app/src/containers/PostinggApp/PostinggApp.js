import React, {Component} from 'react';
import Posts from '../../components/Posts/Posts';
import FullPost from '../../components/Posts/FullPost/FullPost';
import { connect } from 'react-redux';

class PostinggApp extends Component {

    componentDidMount () {
        console.log(this.props.posts)
    }

    render() {
        return(
            <div>
                <button onClick = {this.props.onViewPost}>View Post</button>
                <Posts/>
                <FullPost/>

            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return{
        posts : state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onViewPost : () => dispatch({type : "VIEW_POST"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostinggApp);
