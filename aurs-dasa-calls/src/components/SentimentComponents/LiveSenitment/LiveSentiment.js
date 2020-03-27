import React, { useState, useEffect } from 'react';
import AudioPicker from '../../GeneralComponents/AudioPicker/AudioPicker';
import FileDetails from '../../GeneralComponents/FileDetails/FileDetails';
import SentimentClasses from './SenitmentClasses/SentimentClasses';
import SentimentResult from './SentimentResult/SentimentResult';
import Spinner from '../../UI/Spinner/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert } from 'react-bootstrap';
import classes from './LiveSentiment.module.css';


import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const Livesentiment = (props) => {
    const [show, setShow] = useState(false);

    const [buttonContent, setButtonContent] = useState('Check Sentiment');


    useEffect(() => {
        if (props.sentimentState.resultStatus) {
            setButtonContent('Check for Another Call')
        }
    }, [props.sentimentState.resultStatus, props.sentimentState.loading])


    const setFileHanlder = fileData => {
        props.onSetFile(fileData);
    }


    const checkSentimentHandler = () => {
        if (props.audioState.fileStatus) {
            props.onCheckSentiment()
        } else {
            setShow(true)
        }
    }

    const checkAnotherCallHanlder = () => {
        setButtonContent('Check Sentiment')
        props.onResetSentiment();
        props.onResetFile();

    }

    let sentiment_button_class = [];

    if (!props.audioState.fileStatus) {
        sentiment_button_class.push(classes.sentiment_button);
    }

    return (
        <div className={classes.main}>
            {show ? <Alert style={{ marginTop: '3%' }} variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    No Audio File Was Revieved, Please select and Audio Call first and then check the sentiment.
        </p>
            </Alert> : !props.audioState.fileStatus ? <AudioPicker setFile={setFileHanlder} /> : <FileDetails 
            data = {props.sentimentState} 
            discard = {checkAnotherCallHanlder} />}

            <Button
                onClick={!props.sentimentState.resultStatus ? checkSentimentHandler :  checkAnotherCallHanlder}
                className={sentiment_button_class.join(' ')}
                variant="warning" size="lg">{buttonContent}
            </Button>


            {props.sentimentState.loading ? <Spinner/> : props.sentimentState.resultStatus ? <SentimentResult/> :<SentimentClasses/> }
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
        onSetFile: (fileData) => dispatch(actions.setSentiment(fileData)),
        onCheckSentiment : () => dispatch(actions.checkSentiment()),
        onResetSentiment : () => dispatch(actions.resetSentimentResult()),
        onResetFile : () => dispatch(actions.resetFileStatus())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Livesentiment);