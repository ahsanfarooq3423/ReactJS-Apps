import React from 'react';
import classes from './User.module.css';
import userImage from '../../../images/users/user_1.jpg';


const user = () => (
    <div className = {classes.main}>
        <img className = {classes.image} src = {userImage}/>
        <h4>John Doe</h4>
        <p>General Manager Calls</p>
    </div>
)

export default user;