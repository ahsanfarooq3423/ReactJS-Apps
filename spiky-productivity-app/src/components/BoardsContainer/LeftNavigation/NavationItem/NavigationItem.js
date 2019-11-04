import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './NavigationItem.module.css';



const navigationItem = (props) => {
    let styles = [];
    styles.push(classes.item);
    
    if(props.class){
        styles.push(classes.active);
    }
  
    return (
        
            <div className = {styles.join(" ")}>
            <p className = {classes.innertext}>
                <FontAwesomeIcon icon={props.icon} /> 
                 <span style = {{marginLeft : '8px'}}>{props.text}</span> </p>
        </div>

        
    )
}

export default navigationItem;