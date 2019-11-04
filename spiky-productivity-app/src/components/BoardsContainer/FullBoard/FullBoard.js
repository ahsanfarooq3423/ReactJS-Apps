import React, {Component} from 'react';
import Strip from './Strip/Strip';
import classes from './FullBoard.module.css';
import List from './List/List';




class FullBoard extends Component {


    
    
    render() {

        var lists = [];
        
        for (let list_name in this.props.board.data.lists){
            lists.push(list_name);
        }

     

        return(
           
            <div className = {classes.main} style = {{backgroundImage: "url(" + this.props.current.url + ")"}}>
                <Strip name = {this.props.current.name}/>
            
                <div className = {classes.listContainer}>
                    {/* <List/>
                    <List/> */}
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