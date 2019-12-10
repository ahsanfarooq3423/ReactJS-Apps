import React, {Component} from 'react';
import classes from './EditPost.module.css';
import EditTitle from './EditTitle/EditTitle';
import EditContent from './EditContent/EditContent';
import EditButtons from './EditButtons/EditButtons';
import { withRouter } from 'react-router';

class EditPost extends Component {
    render() {
        return(
            <div className = {classes.main} >
            <h1 className = {classes.header}>Edit Post:</h1>
            <EditTitle title = "The game of thrones"/>
            <EditContent content = "the breaking bad was such a hit becuase their were very solid"/>
            <EditButtons/>
            </div>
        )
    }
}

export default  withRouter(EditPost);