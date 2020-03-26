import React, {useState} from 'react';
import AudioPicker from '../../GeneralComponents/AudioPicker/AudioPicker';
import FileDetails from '../../GeneralComponents/FileDetails/FileDetails';
import AudioSurf from '../../GeneralComponents/FileDetails/AudioSurf/AudioSurf';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './LiveSentiment.module.css';


import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

function livesentiment(props) {

    const setFileHanlder = fileData => {
        props.onSetFile(fileData);
    }  

    return (
        <div className={classes.main}>
            <FileDetails/>
            {/* {props.sentimentState.fileData ? <FileDetails data = {props.sentimentState.fileData}/> : null} */}
            {/* {!props.audioState.fileStatus ? <AudioPicker setFile = {setFileHanlder} /> : null} */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        sentimentState : state.sentimentState,
        audioState : state.audioState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetFile : (fileData) => dispatch(actions.setSentiment(fileData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(livesentiment);