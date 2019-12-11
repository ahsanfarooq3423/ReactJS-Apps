import React, {Component} from 'react';
import classes from './EditPost.module.css';
import EditTitle from './EditTitle/EditTitle';
import EditContent from './EditContent/EditContent';
import EditButtons from './EditButtons/EditButtons';
import {connect} from 'react-redux';
import * as postActions from '../../../store/actions/index';
import { withRouter } from 'react-router';

class EditPost extends Component {

    state = {
        editPost : null
    }

    componentDidMount = () => {
        this.setState({editPost : this.props.fullpost})
    }

    titleChangeHandler = (event) => {
        let copyState = {...this.state}
        let copyPost = {...copyState.editPost}
        copyPost.title = event.target.value;
        this.setState({editPost : copyPost})
        
    }

    contentChangeHandler = (event) => {
        let copyState = {...this.state}
        let copyPost = {...copyState.editPost}
        copyPost.content = event.target.value;
        this.setState({editPost : copyPost})
    }


    render() {
        return(
            <div className = {classes.main} >
            <h1 className = {classes.header}>Edit Post:</h1>
            <EditTitle 
                titleChange = {this.titleChangeHandler}
                title = {this.props.fullpost.title}/>
            <EditContent 
                contentChange = {this.contentChangeHandler}
                content = {this.props.fullpost.content}/>
            <EditButtons
            
                savePost = {() =>{
                        let to = "/"
                        this.props.history.push(to)
                        this.props.onSavePost(this.state.editPost)} } />
            </div>
        )
    }
}




const mapStateToProps = state => {
    return {
        fullpost : state.postsState.viewPost
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSavePost : (editPost) => dispatch(postActions.saveEditPost(editPost))
    }
}



export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPost));