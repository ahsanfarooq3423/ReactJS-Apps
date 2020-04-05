import React from 'react';
import TextDisplay from '../../../SpeechTextComponents/LiveSpeechText/SpeechResult/SpeechResult';
import {Button} from 'react-bootstrap'
import classes from './ShowText.module.css';


const ShowText = (props) => {
    return (
        <div className = {classes.main}>
            <TextDisplay   {...props}/>
            <Button 
            onClick = {props.discard}
            style = {{marginTop : '1%'}}
             variant = "danger">Discard this Call Text</Button>
        </div>
    )
}

export default ShowText;