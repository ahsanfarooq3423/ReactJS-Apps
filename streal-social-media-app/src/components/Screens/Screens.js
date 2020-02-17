import React from 'react';
import ScreenCard from './ScreenCard/ScreenCard';
import classes from './Screens.module.css';
import {connect} from 'react-redux';

const screens = props => {

    return(
        <div className = {classes.main}>
            <ScreenCard/>
        </div>
    )
}



export default screens;

