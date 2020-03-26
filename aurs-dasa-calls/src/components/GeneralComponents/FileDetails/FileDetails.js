import React from 'react';
import classes from './FileDetails.module.css';

import AudioSurf from './AudioSurf/AudioSurf';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

function filedetails(props) {
    return (
        <div className={classes.main} >
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>File Name : props.data.fileName </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">File Type : props.data.fileType</Card.Subtitle>
                    <Card.Text>
                        File Size props.data.fileSize MB
                    </Card.Text>
                    <Button variant="danger">Discard this Audio Call</Button>

                </Card.Body>
            </Card>
            

            <AudioSurf/>

        </div>
    )
}

export default filedetails;