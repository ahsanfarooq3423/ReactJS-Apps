import React from 'react';
import styles from './Leftbox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const GreenBox = (props) => {
    return(
        <div className = {styles.GreenBox}> 
            <p>{props.boxName}</p>
        </div>
    )
}

const RedBox = (props) => {
    return(
        <div className = {styles.RedBox}> 
            <p>{props.boxName}</p>
        </div>
    )
}

const YellowBox = (props) => {
    return(
        <div className = {styles.YellowBox}> 
            <p>{props.boxName}</p>
        </div>
    )
}



const leftbox = (props) => {
    return(
        <div className = {styles.leftbox}>
            <div className = {styles.heading}>
            <FontAwesomeIcon icon= {faCoffee} size="lg" className = {styles.float}  />
            <h2 className = {styles.heading}>Recipe Box Application</h2> 
            
            <GreenBox boxName = "Add a New Recipe" />
            <GreenBox boxName = "Show All Recipes" />
            <RedBox boxName = "Remove All Recipes"/>

            <h6> The list of Recipes:</h6>

            <YellowBox boxName = "Burger"/>
            <YellowBox boxName = "Pizza"/>
            <YellowBox boxName = "Chinese"/>
            
            </div>
            
            
        </div>
    )
}


export default leftbox;