import React, { Fragment, useState, useEffect } from 'react';
import classes from './AudioPicker.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAudio } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';


import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';


function AudioPicker(props) {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Select Audio Call to Upload');
    const [uploadDisabled, setUpload] = useState(false);
    const [fileSize, setFileSize] = useState(0);
    const [fileType, setFileType] = useState('');

    const [sentimentState, setSentimentState] = useState(null);

    const fileUploadHanlder = event => {
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name)
        setFileSize(event.target.files[0].size / 1000000);
        setFileType(event.target.files[0].type);
    }

    useEffect(() => {
        if (file) {
            setUpload(true)
        }
    }, [file, sentimentState])


    const setFileHanlder = () => {
        const fileData = {
            file, fileName, fileSize, fileType
        }
        props.onSetFile(fileData)
    }

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
                onClick = {setFileHanlder}
            >Upload the Call</Button>
            <LinearProgress className={classes.progress} variant="determinate" value={20} />

        </div>
    )
}
const mapStateToProps = state => {
    return {
        sentimentState : state.sentimentState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetFile : (fileData) => dispatch(actions.setSentiment(fileData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AudioPicker);