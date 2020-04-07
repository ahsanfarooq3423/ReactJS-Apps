import React from 'react';
import classes from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faChartBar, faPhone } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';


const header = () => {
    return (
        <div className= {classes.main}>
            <div className = {classes.content}>
                <h1 className = {classes.title}>AUSR - DASA </h1>
                <h2 className = {classes.subtitle}>Automatic Urdu Speech Recognition -
                 Data Analytics and Sentiment Analysis</h2>
                <div className = {classes.button_layout}>
                <Button className = {classes.button} variant="dark" size="lg">
                     <FontAwesomeIcon icon = {faVideo} /> <p className = {classes.b_text}>See the Demo</p></Button>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard/speech/live'>
                     <Button className = {classes.button} variant="warning" size="lg">
                     <FontAwesomeIcon icon = {faChartBar} /> <p className = {classes.b_text} >Go to DashBoard</p></Button>
                </Link>
                </div>
                <FontAwesomeIcon className = {classes.phone_icon} icon = {faPhone} />
                <p className = {classes.footnote}>The intelligent solution for your call centers</p>

                <div className = {classes.register_button}>
                    <span>REGISTER HERE</span>
                </div>
            </div>
        </div>
    )
}

export default header;