import React from 'react';
import TopBox from './TopBox/TopBox';
import ContentBox from './ContentBox/ContentBox';
import ButtonBox from './ButtonBox/ButtonBox';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import classes from './FullPost.module.css';


const fullpost = (props) => {

    console.log(props)
    return(
        <div className = {classes.container}>
            <TopBox
                author = {props.usersMapping[props.fullpost.authorId]}
                timeStamp = {props.fullpost.timestamp}
                title = {props.fullpost.title}
                src = {props.fullpost.picUrl}/>
            <ContentBox/>
            <ButtonBox/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        fullpost : state.postsState.viewPost
    }
}

export default withRouter(connect(mapStateToProps)(fullpost));    

