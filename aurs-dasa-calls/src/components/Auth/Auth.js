import React from 'react';
import classes from './FormAuth.module.css';

import Login from './LoginAuth';
import Signup from './SignupAuth';

const Auth = () => {
    return(
    <div className= {classes.flex}>
        <Login/>
        <Signup/>
    </div>
    )
    
}

export default Auth;