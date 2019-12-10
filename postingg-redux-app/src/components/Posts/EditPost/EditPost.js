import React, {Component} from 'react';
import classes from './EditPost.module.css';
import EditTitle from './EditTitle/EditTitle';
import EditContent from './EditContent/EditContent';
import EditButtons from './EditButtons/EditButtons';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

class EditPost extends Component {

    state = {
        newPost : null
    }

    componentWillMount = () => {
        this.setState({newPost : this.props.fullpost})
    }

    titleChangeHandler = (event) => {
        console.log(event.target.value)
    }

    contentChangeHandler = (event) => {
        console.log(event.target.value)
    }


    render() {
        return(
            <div className = {classes.main} >
            <h1 className = {classes.header}>Edit Post:</h1>
            <EditTitle 
                titleChange = {this.titleChangeHandler}
                title = {this.props.fullpost.title}/>
            <EditContent 
                contentChange = {this.props.contentChange}
                content = {this.props.fullpost.content}/>
            <EditButtons/>
            </div>
        )
    }
}




const mapStateToProps = state => {
    return {
        fullpost : state.postsState.viewPost
    }
}

export default  withRouter(connect(mapStateToProps)(EditPost));