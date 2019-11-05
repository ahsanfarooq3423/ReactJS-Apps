import React, {Component} from 'react';
import Strip from './Strip/Strip';
import classes from './FullBoard.module.css';
import List from './List/List';




class FullBoard extends Component {


    
    
    render() {
        console.log(this.props.board)
        var lists = [];
        
        for (let list_name in this.props.board.data.lists){
            lists.push(list_name);
        }
     

        return(
           
            <div className = {classes.main} style = {{backgroundImage: "url(" + this.props.board.img + ")"}}>
                <Strip name = {this.props.board.name}/>
            
                <div className = {classes.listContainer}>
                    {lists.map((list,index) => {
                        return <List 
                                name = {list} 
                                key = {index} 
                                items = {this.props.board.data.lists[list]} />
                    })}
                    
                   
                </div>
            
            </div>

            

        )     
    }
}


export default FullBoard;