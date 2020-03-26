import React from 'react';
import { peaks } from './Peaks';
import WaveSurfer from 'wavesurfer';
import classes from './AudioSurf.module.css';

import PlayIcon from '../../../../images/sound/play.png';
import PauseIcon from '../../../../images/sound/pause.png';



// .ebee
class FileSurfer extends React.Component {
  componentDidMount() {
    const aud = document.querySelector('#song');

    this.wavesurfer = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'MediaElement',
      height: 80,
      progressColor: '#4a74a5',
      responsive: true,
      waveColor: '#ccc',
      cursorColor: '#4a74a5',
    });

    this.wavesurfer.load(aud, peaks);
  }

  playIt = () => {
    this.wavesurfer.playPause();
  };

  render() {
    return (
      <div className = {classes.main}>
        <div className = {classes.button} onClick={this.playIt}>
            <img className = {classes.play_icon} src = {PlayIcon}/>
        </div>

        <div
          style={{ marginTop : '30px', marginLeft : '10px' , marginBottom : '-80px', width: 700, height: 190 }}
          id="waveform"
        />

        
        <audio
          id="song"
          src="https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a"
        />
      </div>
    );
  }
}


export default FileSurfer;
