import React from 'react';
import classes from './Jumbotron.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxes, faSearch } from '@fortawesome/free-solid-svg-icons';


const jumbotron = () => {
    return(
        <div className = {classes.jumbotron}>
            <div className = {classes.subdiv}>
                <p className = {classes.title}> <FontAwesomeIcon icon={faBoxes} /> Welcome to the Postingg App!</p>
                <p className = {classes.subtitle}>Postingg is a platform to share your posts with the world!!!</p>
                <div className = {classes.search}>
                <input className = {classes.input} placeholder = 'Search Posts'/>
                <FontAwesomeIcon className = {classes.icon} icon={faSearch}/>
                </div>
            </div>

            <p className = {classes.newpost}>+ Contribute a new post!</p>
        </div>
    )
    
}

export default jumbotron