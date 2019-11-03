import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './NavigationItem.module.css';



const navitem = (props) => {
    let styles = [];
    styles.push(classes.navitem);
    
    if(props.active){
        styles.push(classes.active);
    }
  
    return(
        <div className = {styles.join(" ")}>
             <FontAwesomeIcon icon = {props.icon} className = {classes.chart}  />
            <p>{props.text}</p>
        </div>
    )
}


export default navitem;