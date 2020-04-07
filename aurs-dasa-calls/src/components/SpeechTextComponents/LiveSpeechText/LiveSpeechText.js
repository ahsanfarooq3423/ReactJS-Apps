import React, { useState , useEffect} from 'react';
import classes from './LiveSpeechText.module.css';
import AudioPicker from '../../GeneralComponents/AudioPicker/AudioPicker';
import FileDetails from '../../GeneralComponents/FileDetails/FileDetails';
import SpeechResult from './SpeechResult/SpeechResult';
import Spinner from '../../UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';


import micImage from '../../../images/workings/step2.png';

const LiveSpeech = (props) => {
    const [show, setShow] = useState(false);
    const [buttonContent, setButtonContent] = useState('Covert Audio Call to Text');

    const setFileHanlder = fileData => {
        props.onSetFile(fileData);
    }


    useEffect(() => {
        if (props.speechState.resultStatus) {
            setButtonContent('Convert Audio To Text for Another Call')
        }
    }, [props.speechState.resultStatus, props.speechState.loading])

    const checkAnotherCallHanlder = () => {
        setButtonContent('Covert Audio Call to Text');
        props.onResetSpeechText();
        props.onResetFile();
    }

    const convertSpeechToTextHandler = () => {
        if (props.audioState.fileStatus) {
            props.onSpeechToText()
        } else {
            setShow(true)
        }
    }

    let speech_button_class = [];

    if (!props.audioState.fileStatus) {
        speech_button_class.push(classes.speech_button);
    }

    return (
        <div className={classes.main}>
            {show ? <Alert style={{ marginTop: '3%' }} variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    No Audio File Was Revieved, Please select and Audio Call first and then convert to speech.
        </p>
            </Alert> : !props.audioState.fileStatus ? <AudioPicker setFile={setFileHanlder} /> : <FileDetails
                data={props.speechState}
                discard={checkAnotherCallHanlder} />}

            <div
                onClick={!props.speechState.resultStatus ? convertSpeechToTextHandler : checkAnotherCallHanlder}
                className={classes.mic}>
                <img src={micImage} alt='mic' />
                <p>{buttonContent}</p>
            </div>
            {props.speechState.loading ? <Spinner/> : props.speechState.resultStatus ? 
                                        <SpeechResult result = {props.speechState.result}/> :null }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        speechState: state.speechState,
        audioState: state.audioState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetFile: (fileData) => dispatch(actions.setSpeechTextFile(fileData)),
        onResetSpeechText: () => dispatch(actions.resetSpeechText()),
        onSpeechToText: () => dispatch(actions.checkSpeechText()),
        onResetFile: () => dispatch(actions.resetFileStatus())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveSpeech);