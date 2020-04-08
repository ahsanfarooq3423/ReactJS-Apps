import React from 'react';
import classes from './Product.module.css';
import image from '../../../../images/products/DA.png';
import ProductList from './ProductList/ProductList';



const product = props => {

    const routerHandler = () => {
        props.history.push(props.data.path)
    }
    return (
        <div onClick = {routerHandler}  className={classes.main}>
            <img className={classes.image} src={props.data.image} alt="Data Analytics" />
    <p className = {classes.title}>{props.data.title}</p>
            <hr />
    <p className={classes.intro}>{props.data.intro}</p>
            <button className={classes.button}> Analyze  </button>
            <ProductList list = {props.data.list}/>
        </div>
    )
}

export default product;