import React, {useState} from 'react';
import classes from './User.module.css';


const user = () => {
    return (
        <div className = {classes.mainCard}>
            <img className = {classes.avatar} src = 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1145&q=80'/>
            <p>Name :  Ahsan Farooq</p>
            <p>DOB : 8-April -1997</p>
        </div>
    )
}

export default user;