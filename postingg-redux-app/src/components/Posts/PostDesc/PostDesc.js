import React from 'react';
import classes from './PostDesc.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';

const postdesc = (props) => {

    const gridStyles = [classes.suboption];
    const listStyles = [classes.suboption];
    if (props.view === 'grid') {
        gridStyles.push(classes.active);
    }
    if (props.view === 'list') {
        listStyles.push(classes.active);
    }
    return(
        <div className = {classes.desc}>
            <div className = {classes.main}>
                <h1>{props.title}</h1>
            </div>

            <div className = {classes.options}>
                <div 
                    onClick = {props.onGridView} 
                    className = {gridStyles.join(" ")}><FontAwesomeIcon icon={faTh} /> GRID</div>
                <div 
                    onClick = {props.onListView}
                    className = {listStyles.join(" ")}><FontAwesomeIcon icon={faList} /> LIST</div>
            </div>

        </div>
    )
}

export default  postdesc;