import React, { Fragment, useState, useEffect } from 'react';
import classes from './AudioPicker.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAudio } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';


function AudioPicker(props) {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('Select Audio Call to Upload');
    const [uploadDisabled, setUpload] = useState(false);
    const [fileSize, setFileSize] = useState(0);
    const [fileType, setFileType] = useState('');
    const [barStatus, setBarStatus] = useState(false);
    const [barNumber, setBarNumber] = useState(0);


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
        if (barNumber > 90) {
            setTimeout(() => {
                props.onFileSet()
            }, 1000)
        }
    }, [file, barNumber])


    const barNumberProgressHanlder = () => {
        for (var i = 0; i <= 95; i += 10) {
            setTimeout(() => {
                setBarNumber(i)
            }, 500)
        }
    }


    const setFileHanlder = () => {
        setBarStatus(true)
        barNumberProgressHanlder()
        const fileData = {
            file, fileName, fileSize, fileType
        }
        props.setFile(fileData)
    }

    return (
        <div className={classes.root}>
            <input type="file" name="file" id="file" class={classes.inputfile} onChange={fileUploadHanlder} />
            <label for="file"><div className={classes.main}>
                <FontAwesomeIcon className={classes.icon} icon={faFileAudio} />
                <p className={classes.text}>{fileName}</p>
            </div></label>
            <Button
                disabled={!uploadDisabled}
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={setFileHanlder}
            >Upload the Call</Button>
            {
                barStatus ? <LinearProgress className={classes.progress} variant="determinate" value={barNumber} /> : null
            }

            {/* <button onClick = {playSound}>Play it </button> */}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onFileSet: () => dispatch(actions.setFileStatus())
    }
}


export default connect(null, mapDispatchToProps)(AudioPicker);