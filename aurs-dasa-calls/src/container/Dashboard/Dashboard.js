import React from 'react';
import LeftDrawer from '../../components/LeftDrawer/LeftDrawer';
import classes from './Dashboard.module.css';

const dashboard = () => {
    return (
        <div className = {classes.main}>
            <LeftDrawer/>
            <div className = {classes.left_container}></div>
        </div>
    )
}

export default dashboard;