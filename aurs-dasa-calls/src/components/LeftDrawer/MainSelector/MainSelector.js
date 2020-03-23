import React from 'react';
import classes from './MainSelector.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faHome } from '@fortawesome/free-solid-svg-icons';

const mainselector = props => {
    let icon;
    if (props.name === 'dashboard') {
        icon = faLaptop;
    } else if (props.name === 'home') {
        icon = faHome
    }

    const styles = [classes.main];

    if (props.selected) {
        styles.push(classes.selected)
    }

    return (
        <div className={styles.join(' ')}>
            <FontAwesomeIcon icon={icon} className={classes.icon} />
            <h6>{props.name.toUpperCase()}</h6>
        </div>)
}





export default mainselector;