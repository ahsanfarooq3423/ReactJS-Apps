import React, {PureComponent} from 'react';
import classes from './GroceryItem.module.css';
import Button from './Button/Button';
import Addon from './Button/Addon';


class Item extends PureComponent {

    render() {
     let   name = this.props.name;
     let caps_name = name[0].toUpperCase() + name.slice(1);
     let type = this.props.type;
     let totalUnits;
        if (this.props.cart.items[name] === undefined){
        
            totalUnits = 0
        }
    
        else {
            totalUnits = this.props.cart.items[name].units;
         
        }
    
        return(
            <div className = {classes.card} >
                
                    <img src = {require('../../../../assets/images/' + type + '/' + name + '.jpeg')} alt = {name}/>
                    <div className = {classes.info} >
                         <p className = {classes.name}>{caps_name}</p>
                         <p className = {classes.price}>{"$ " + this.props.price}</p>
                         
                    </div>
                    {totalUnits === 0 ? <Button
                     
                     getItem = {this.props.getItem} 
                     totalItems = {this.props.totalItems}/> : 
                      <Addon
                      
                      removeItem = {this.props.removeItem} 
                      getItem = {this.props.getItem} 
                      totalItems = {totalUnits}/>
                     }
                    
                    
                
            </div>
            
        )
    }
}



export default  Item;