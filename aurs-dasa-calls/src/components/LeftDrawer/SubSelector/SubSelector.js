import React from 'react';
import classes from './SubSelector.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faSmile, faChartBar, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

const mainselector = props => {
    let icon;
    if (props.name === 'calls to text') {
        icon = faHeadset;
    } else if (props.name === 'sentiment analysis') {
        icon = faSmile
    } else if (props.name === 'data analytics') {
        icon = faChartBar
    } else if (props.name === 'problem identification') {
        icon = faExclamationCircle
    }

    const styles = [classes.sub_div];

    if (props.selected) {
        styles.push(classes.selected)
    }

    const clickHandler = () => {
        props.click()
        props.onFileReset()
    }

    return (
        <div onClick = {clickHandler} className={classes.main}>
            <div className = {styles.join(' ')}>
                <FontAwesomeIcon icon={icon} className={classes.icon} />
                <p className={classes.text}>{props.name.toUpperCase()}</p>
            </div>
        </div>)
}



const mapDispatchToProps = dispatch => {
    return {
        onFileReset: () => dispatch(actions.resetFileStatus())
    }
}



export default connect(null, mapDispatchToProps)(mainselector);