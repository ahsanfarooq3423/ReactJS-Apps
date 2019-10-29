import React, {Component} from 'react';
import classes from './GroceryTypes.module.css';
import {Link} from 'react-router-dom';

class GroceryTypes extends Component {
    //making sure not the update the fixed compoent i.e. it does not change
    shouldComponentUpdate (nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <div className = {classes.Categories}>
            <ul>
                <li className = {classes.title}>All Categories</li>
                {this.props.types.map((type,index) => {
                    return (
                    <Link to = {'/home/' + type.name } className = {classes.link} key = {index}>
                        <li
                            
                            className ={classes.types}  
                            onClick = {() => this.props.getPage(type)} > {type.name} </li>
                    </Link>)
                })}
            </ul>
        </div>
        )
    }
}




export default GroceryTypes;