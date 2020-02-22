import React from 'react';
import Skeleton from 'react-loading-skeleton';
import classes from  './UserInfo.module.css';

const skeleton = props => {
    let lines = 2;
    if (props.showInfo){
        lines = 5
    }
    return(
        <div className = {classes.skeleton}>
            <Skeleton count = {lines}/>
        </div>
    )
}

export default skeleton;