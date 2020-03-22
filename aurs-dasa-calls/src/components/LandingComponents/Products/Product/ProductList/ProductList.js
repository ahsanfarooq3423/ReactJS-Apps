import React from 'react';
import classes from './ProductList.module.css';

const productList = props => {
    return (
            <ul className={classes.list}>
                {props.list.map(item => <li>{item}</li>)}
            </ul>
    )
}

export default productList;
