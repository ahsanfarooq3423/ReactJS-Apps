import React from 'react';
import classes from './FileDetails.module.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

import AudioSurf from './AudioSurf/AudioSurf';

function filedetails(props) {

    return (
        <React.Fragment>
      {props.data.fileData ? <div className={classes.main} >
      <Card style={{ width: '18rem' }}>
          <Card.Body>
              <Card.Title>File Name :  {props.data.fileData.fileName} </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">File Type : {props.data.fileData.fileType}</Card.Subtitle>
              <Card.Text>
                  File Size {props.data.fileData.fileSize} MB
              </Card.Text>
              <Button variant="danger" onClick = {props.discard}>Discard this Audio Call</Button>

          </Card.Body>
      </Card>
      <div className = {classes.second_div}>
      <AudioSurf/>
      </div>
     
  </div> : null } 
  </React.Fragment> 
    )
}

export default filedetails;