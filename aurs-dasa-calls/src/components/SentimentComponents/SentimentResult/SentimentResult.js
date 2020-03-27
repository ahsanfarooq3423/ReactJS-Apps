import React, { useState, useEffect } from 'react';
import classes from './SentimentResult.module.css';
import angryImage from '../../../images/sentiment/angry.png';
import calmImage from '../../../images/sentiment/calm.png';

import { Alert } from 'react-bootstrap';

const SentimentResult = props => {

    const [result, setResult] = useState({
        title: 'Hey !!! The Customer was calm and fine in this call .',
        content: ` Yeah, the customer was having good tone in this call, this result is based
                    on the tonality of the customer, in which tone he/she was speaking etc.`
    })

    useEffect(() => {
        if (props.sentiment === 'angry') {
            setResult({
                title: 'Oh Snap !!! The Customer was angry in the call.',
                content: `You should take preventive measures for the customer,this result is based
                on the tonality of the customer, in which tone he/she was speaking etc. `
            })
        }
    }, [props.sentiment])

    return (
        <div className={classes.main}>
            {/* <Alert style = {{marginTop : '2%', marginBottom : '0px'}} variant={props.sentiment === 'calm' ? 'primary' : 'danger'}>
            <h5>The Customer was {props.sentiment} </h5>
            </Alert> */}
            <Alert variant="success">
                <Alert.Heading>{result.title}</Alert.Heading>
                <p>
                   {result.content}
             </p>
            </Alert>
            {props.sentiment === 'angry' ? <div className={classes.image}>
                <img src={angryImage} />
                <p>Angry Customer</p>
            </div> : <div className={classes.image}>
                    <img src={calmImage} />
                    <p>Calm Customer</p>
                </div>}

        </div>
    )
}

export default SentimentResult;