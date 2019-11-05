import React, {Component} from 'react';
import Card from './Card/Card';
import classes from './List.module.css';


class List extends Component {

   
   
    render(){

        let cards = [];
        for (let card in this.props.items.items){
            cards.push(card);
        }


        let title = <input type = 'text' value = {this.props.name} className = {classes.titleInput}/>
        return(
            <div className = {classes.list}>
                <div className = {classes.title} >
                    <div className = {classes.field}>{title}</div>
                    <div className = {classes.more}><p>...</p></div>
                </div>

                <div>
                    {cards.map(card => {
                        return <Card card = {card} />
                    })}
                </div>
                
            </div>
        )
    }
}


export default List;