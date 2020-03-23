import React, { Fragment, useState, useEffect } from 'react';
import classes from './AudioPicker.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAudio } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


function AudioPicker() {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Select Audio Call to Upload');
    const [uploadDisabled, setUpload] = useState(false);

    const fileUploadHanlder = event => {
        console.log(event.target.files)
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name)
    }

    useEffect(() => {
        if (file) {
            setUpload(true)
        }
    }, [file])


    return (
        <div className={classes.root}>
            <input type="file" name="file" id="file" class={classes.inputfile} onChange={fileUploadHanlder} />
            <label for="file"><div className={classes.main}>
                <FontAwesomeIcon className={classes.icon} icon={faFileAudio} />
                <p className={classes.text}>{fileName}</p>

            </div></label>

            <Button

                variant="contained"
                color="primary"
                className={classes.button}
            >Upload the Call</Button>


            <LinearProgress className={classes.progress} variant="determinate" value={20} />


        </div>
    )
}

export default AudioPicker;