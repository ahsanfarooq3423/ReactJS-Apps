import React from 'react';
import AudioPicker from '../AudioPicker/AudioPicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import classes from './LiveSentiment.module.css';


const livesentiment = () => {
    return (
        <div className={classes.main}>
            <AudioPicker />
            {/* <Button variant="primary" size="lg" block>
                Check Live Sentiment of this Call
            </Button> */}
        </div>
    )
}

export default livesentiment;