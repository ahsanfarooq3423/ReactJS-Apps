import React from 'react';
import classes from './Demo.module.css';

const demo = () => {
    return (
        <div className={classes.main_demo}>
            <h1> <span className={classes.demo_span}>Demo</span> Video </h1>
            <div className = {classes.video_content}>
                <iframe width="680" height="420"
                    src="https://www.youtube.com/embed/0SVJ8dG2PUQ"
                    frameborder="0" allow="accelerometer; autoplay; 
                    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default demo;