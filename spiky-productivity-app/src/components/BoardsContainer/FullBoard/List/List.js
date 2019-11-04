import React, {Component} from 'react';
import classes from './List.module.css';


class List extends Component {

   
    render(){

        let title = <input type = 'text' value = {this.props.name} className = {classes.titleInput}/>
        return(
            <div className = {classes.list}>
                <div className = {classes.title} >
                    <div className = {classes.field}>{title}</div>
                    <div className = {classes.more}><p>...</p></div>
                </div>
                
            </div>
        )
    }
}


export default List;