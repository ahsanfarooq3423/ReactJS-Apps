import React from 'react';
import { peaks } from './Peaks';
import WaveSurfer from 'wavesurfer';
import classes from './AudioSurf.module.css';

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
    console.log(peaks.length);

  }

  playIt = () => {
    this.wavesurfer.playPause();
  };

  // 472, 780, +

  render() {
    return (
      <div className = {classes.main}>
        <button onClick={this.playIt}>Play</button>
        <div
            className = {classes.wave}
        //   style={{ border: '1px solid grey', width: 150, height: 80 }}
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
