import React, {Component} from 'react';
import classes from './GroceryTypes.module.css';


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
                    return <li 
                            key = {index}
                            className ={classes.types}  
                            onClick = {() => this.props.getPage(type)} > {type.name} </li>
                })}
            </ul>
        </div>
        )
    }
}




export default GroceryTypes;