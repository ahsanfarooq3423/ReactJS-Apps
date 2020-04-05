import React, { useState, useEffect } from 'react';
import classes from './LiveProblem.module.css';
import AudioPicker from '../../GeneralComponents/AudioPicker/AudioPicker';
import FileDetails from '../../GeneralComponents/FileDetails/FileDetails';

import Spinner from '../../UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Form, Button } from 'react-bootstrap';


import identifyImage from '../../../images/problem/identify.jpg';

const LiveProblem = (props) => {
    const [show, setShow] = useState(false);
    const [buttonContent, setButtonContent] = useState('Identify Problem in the Call');

    const setFileHanlder = fileData => {
        props.onSetFile(fileData);
    }


    useEffect(() => {
        if (props.problemState.resultStatus) {
            setButtonContent('Identify Problem for Another Call')
        }
    }, [props.problemState.resultStatus, props.problemState.loading])

    const checkAnotherCallHanlder = () => {
        setButtonContent('Identify Problem in the Call');
        props.onResetProblemFile();
        props.onResetFile();
    }

    const identifyProblemHanlder = () => {
        if (props.problemState.fileStatus) {
            props.onCheckProblem()
        } else {
            setShow(true)
        }
    }

    let problem_button_class = [];

    if (!props.problemState.fileStatus) {
        problem_button_class.push(classes.problem_button);
    }

    return (
        <div className={classes.main}>
            {show ? <Alert style={{ marginTop: '3%' }} variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    No Audio File or Text File  Was Revieved, Please select
                    and Audio Call or Enter some call text first and then
                    identify the problem.
        </p>
            </Alert> : !props.problemState.fileStatus ?
                    <div className={classes.input_container}>
                        <AudioPicker setFile={setFileHanlder} />
                        <div className = {classes.text_file}>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control className = {classes.textArea} as="textarea" rows="4" />
                                <Form.Label style = {{marginTop : '3%'}}>Enter the Urdu Audio Text </Form.Label>
                                <Button style = {{marginLeft : '5%'}} variant = "secondary">Save</Button>
                            </Form.Group>
                        </div>
                    </div>
                    : <FileDetails
                        data={props.problemState}
                        discard={checkAnotherCallHanlder} />}

            <div
                onClick={!props.problemState.resultStatus ? identifyProblemHanlder : checkAnotherCallHanlder}
                // onClick={false ? convertSpeechToTextHandler :  checkAnotherCallHanlder}
                className={classes.mic}>
                <img src={identifyImage} alt='mic' />
                <p>{buttonContent}</p>
            </div>
            {/* {props.speechState.loading ? <Spinner/> : props.speechState.resultStatus ? 
                                        <SpeechResult result = {props.speechState.result}/> :null } */}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        problemState: state.problemState,
        audioState: state.audioState
    }
}

const mapDispatchToProps = dispatch => {
    // return {
    //     onSetFile: (fileData) => dispatch(actions.setSpeechTextFile(fileData)),
    //     onResetSpeechText: () => dispatch(actions.resetSpeechText()),
    //     onSpeechToText: () => dispatch(actions.checkSpeechText()),
    //     onResetFile: () => dispatch(actions.resetFileStatus())
    // }

    return {
        onSetFile: (fileData) => dispatch(actions.setProblemFile(fileData)),
        onResetProblemFile: () => dispatch(actions.resetProblemFile()),
        onCheckProblem: () => dispatch(actions.checkProblemResult()),
        onResetFile: () => dispatch(actions.resetFileStatus())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveProblem);