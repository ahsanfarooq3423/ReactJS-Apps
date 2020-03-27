import React, { useState, useEffect } from 'react';
import AudioPicker from '../../GeneralComponents/AudioPicker/AudioPicker';
import FileDetails from '../../GeneralComponents/FileDetails/FileDetails';
import SentimentClasses from '../SenitmentClasses/SentimentClasses';
import SentimentResult from '../SentimentResult/SentimentResult';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert } from 'react-bootstrap';
import classes from './LiveSentiment.module.css';


import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const Livesentiment = (props) => {
    const [show, setShow] = useState(false);
    const [result, setResult] = useState(false);

    const [buttonContent, setButtonContent] = useState('Check Sentiment');

    useEffect(() => {
        if (result) {
            setButtonContent('Check for Another Call')
        }
    },[result])


    const setFileHanlder = fileData => {
        props.onSetFile(fileData);
    }


    const checkSentimentHandler = () => {
        if (!props.audioState.fileStatus) {
            setShow(true)
            setResult(true)
        }

    }

    let sentiment_button_class = [];

    if (!props.audioState.fileStatus) {
        sentiment_button_class.push(classes.sentiment_button);
    }

    return (
        <div className={classes.main}>
            {/* <FileDetails/> */}
            {/* {props.sentimentState.fileData ? <FileDetails data = {props.sentimentState.fileData}/> : null} */}
            {show ? <Alert style={{ marginTop: '3%' }} variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    No Audio File Was Revieved, Please select and Audio Call first and then check the sentiment.
        </p>
            </Alert> : !props.audioState.fileStatus ? <AudioPicker setFile={setFileHanlder} /> : <FileDetails />}

            <Button
                onClick={checkSentimentHandler}
                className={sentiment_button_class.join(' ')}
                variant="warning" size="lg">{buttonContent}
            </Button>

            { result ?   <SentimentResult sentiment='angry' /> : <SentimentClasses/>  }
           
        </div>
    )
}

const mapStateToProps = state => {
    return {
        sentimentState: state.sentimentState,
        audioState: state.audioState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetFile: (fileData) => dispatch(actions.setSentiment(fileData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Livesentiment);