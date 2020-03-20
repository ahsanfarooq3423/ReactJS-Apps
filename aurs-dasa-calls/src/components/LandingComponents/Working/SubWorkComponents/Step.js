import React from 'react';
import classes from './Subwork.module.css';
import call_image from '../../../../images/calls.png';

const step = props => {
    let content = (
        <div className={classes.main_left}>
            <div className = {classes.text}>
                <h1>Step # 1 - We Get the Calls</h1>
                Find the right journalists to pitch
Say hello to your one-stop, relationship-building platform and goodbye to outdated media databases: Muck Rack’s search engine lets you discover and pitch relevant journalists in a much more targeted way than legacy media databases. Building and sharing media lists has never been easier, and since they’re automatically kept up-to-date you can finally stop spending time maintaining old media contact lists.</div>
            
            <img className={classes.image} src={call_image} alt="calls" />
        </div>
    )

    if (props.image_first) {
        content = (
        <div className={classes.main_left}>
        <img className={classes.image} src={call_image} alt="calls" />
        <div className = {classes.text}>
            <h1>Step # 1 - We Get the Calls</h1>
            Find the right journalists to pitch
Say hello to your one-stop, relationship-building platform and goodbye to outdated media databases: Muck Rack’s search engine lets you discover and pitch relevant journalists in a much more targeted way than legacy media databases. Building and sharing media lists has never been easier, and since they’re automatically kept up-to-date you can finally stop spending time maintaining old media contact lists.</div>
        
    </div>
        )
    }
    return (
        <React.Fragment>
        {content}
        </React.Fragment>
    )
}

export default step;