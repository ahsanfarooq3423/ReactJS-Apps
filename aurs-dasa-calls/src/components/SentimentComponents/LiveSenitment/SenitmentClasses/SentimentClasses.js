import React, { useState, useRef } from 'react';
import classes from './SentimentClasses.module.css';


import angryImage from '../../../../images/sentiment/angry.png';
import calmImage from '../../../../images/sentiment/calm.png';

import { Overlay, Popover, Alert } from 'react-bootstrap';

const SentimentClasses = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const [content, setContent] = useState({
        title: 'The customer is satisfied in the call',
        content: `If the tone and way of speaking is not spiky and 
                in flow than  the customer is calm `
    })

    const handleClick = (status, event) => {
        if (status === 'calm') {
            setContent({
                title: 'The customer is satisfied in the call',
                content: `If the tone and way of speaking is not spiky and 
                        in flow than  the customer is calm `
            })
        } else if (status === 'angry') {
            setContent({
                title: 'The customer is angry in the call',
                content: `If the tone and way of speaking is spiky and
                          harsh and not in flow than the customer is angry `
            })
        }
        setShow(!show);
        setTarget(event.target);
    };


    return (
        <div className={classes.main}>
            <div className = {classes.alert}>
                <Alert variant="success">
                    <Alert.Heading>Possible Classes for the Sentiment</Alert.Heading>
                    <p>
                        These are the Possible classes for the sentiments of the customer,
                        this result is basedon the tonality of the customer, in which tone
                         he/she was speaking etc
                    </p>
                </Alert>
            </div>

            <div onClick={handleClick.bind(this, 'angry')} className={classes.image}>
                <img src={angryImage} />
                <p>Angry Customer</p>
            </div>
            <div onClick={handleClick.bind(this, 'calm')} className={classes.image}>
                <img src={calmImage} />
                <p>Calm Customer</p>
            </div>

            <Overlay
                show={show}
                target={target}
                placement="left"
                container={ref.current}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Title as="h3">{content.title}</Popover.Title>
                    <Popover.Content>
                        <strong>{content.content}</strong>
                    </Popover.Content>
                </Popover>
            </Overlay>
        </div>
    )
}

export default SentimentClasses;