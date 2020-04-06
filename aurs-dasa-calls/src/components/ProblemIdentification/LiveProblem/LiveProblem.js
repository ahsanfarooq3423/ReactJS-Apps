import React, { useState, useEffect } from 'react';
import classes from './LiveProblem.module.css';
import AudioPicker from '../../GeneralComponents/AudioPicker/AudioPicker';
import FileDetails from '../../GeneralComponents/FileDetails/FileDetails';

import ShowText from './ShowText/ShowText';

import ProblemContainer from './ProblemClasses/ProblemContainer';
import ProblemResult from './ProblemResult/ProblemResult';

import Spinner from '../../UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Form } from 'react-bootstrap';


import Button from '@material-ui/core/Button';


import identifyImage from '../../../images/problem/identify.jpg';

const LiveProblem = (props) => {
    const [show, setShow] = useState(false);
    const [buttonContent, setButtonContent] = useState('Identify Problem in the Call');
    const [callText, setCallText] = useState(null);
    const [textButtonStatus, setTextButtonStatus] = useState(true);

    const setFileHanlder = fileData => {
        props.onSetFile(fileData);
        props.onSetFileType('audio')
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

    const textChangeHandler = (event) => {
        setCallText(event.target.value)
        if (callText) {
            if (callText.split(" ").length > 10) {
                setTextButtonStatus(false)
            }
        }

    }

    const saveTextHandler = () => {
        if (callText.split(" ").length < 20) {
            setTextButtonStatus(true);
        }
        props.onSetFileType('text')
        props.onSetFile(callText)
    }

    const discardTextHanlder = () => {
        setCallText(null);
        checkAnotherCallHanlder();
        setTextButtonStatus(true)
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
                        <div className={classes.text_file}>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control
                                    onPaste = {textChangeHandler}
                                    onChange={textChangeHandler}
                                    className={classes.textArea} as="textarea" rows="4" />
                                <Form.Label style={{ marginTop: '3%' }}>Enter the Urdu Audio Text </Form.Label>
                                <Button
                                    disabled={textButtonStatus}
                                    onClick={saveTextHandler}
                                    style={{ marginLeft: '5%' }} variant="contained" color="primary">Save</Button>
                            </Form.Group>
                        </div>
                    </div>
                    : props.problemState.fileType === 'audio' ? <FileDetails
                        data={props.problemState}
                        discard={checkAnotherCallHanlder} /> : 
                        <ShowText 
                        discard={discardTextHanlder}
                        result = {props.problemState.fileData}/> }

            <div
                onClick={!props.problemState.resultStatus ? identifyProblemHanlder : checkAnotherCallHanlder}
                className={classes.mic}>
                <img src={identifyImage} alt='mic' />
                <p>{buttonContent}</p>
            </div>
            {props.problemState.loading ? <Spinner /> : 
            <React.Fragment>
            {props.problemState.resultStatus ? <ProblemResult 
                category = {props.problemState.result} 
                dataset = {props.problemState.dataset}/> : 
                <ProblemContainer 
                dataset = {props.problemState.dataset}
                problemState = {props.problemState}  />}
            </React.Fragment>
        }
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
    return {
        onSetFileType: (value) => dispatch(actions.setFileType(value)),
        onSetFile: (fileData) => dispatch(actions.setProblemFile(fileData)),
        onResetProblemFile: () => dispatch(actions.resetProblemFile()),
        onCheckProblem: () => dispatch(actions.checkProblemResult()),
        onResetFile: () => dispatch(actions.resetFileStatus())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveProblem);