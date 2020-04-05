import React from 'react';
import User from './User/User';
import MainSelector from './MainSelector/MainSelector';
import SubSelector from './SubSelector/SubSelector';

import classes from './LeftDrawer.module.css';


const leftdrawer = () => {
    return (
        <div className = {classes.main}>
            <User/>
            <MainSelector name = 'dashboard' selected />
            <MainSelector name = 'home'  />
            <div className = {classes.break}> </div>
            <p className = {classes.subtitle}>MODELS</p>

            <div className = {classes.subselectors}>
                <SubSelector selected name = 'calls to text'/>
                <SubSelector  name = 'sentiment analysis'/>
                <SubSelector name = 'data analytics'/>
                <SubSelector name = 'problem identification'/>

            </div>
        </div>
    )
}

export default leftdrawer;