import React from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './EditUserInfo.module.css';

const edituserinfo = () => {
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Name" />
            <TextField id="standard-basic" label="Bio" />
            <TextField id="standard-basic" label="Location" />
            <TextField id="standard-basic" label="Website" />
        </form>
    )
}

export default edituserinfo;
