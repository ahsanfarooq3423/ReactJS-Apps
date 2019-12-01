import React from 'react';
import classes from './PostDesc.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';

const postdesc = (props) => {

    const styles = [classes.suboption, classes.active];
    return(
        <div className = {classes.desc}>
            <div className = {classes.main}>
                <h1>{props.title}</h1>
            </div>

            <div className = {classes.options}>
                <div className = {styles.join(" ")}><FontAwesomeIcon icon={faTh} /> GRID</div>
                <div className = {classes.suboption}><FontAwesomeIcon icon={faList} /> LIST</div>
            </div>

        </div>
    )
}

export default  postdesc;