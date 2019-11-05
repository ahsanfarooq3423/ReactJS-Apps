import React, {Component} from 'react';
import Strip from './Strip/Strip';
import classes from './FullBoard.module.css';
import List from './List/List';
import {withRouter} from 'react-router-dom';



class FullBoard extends Component {

    componentDidMount() {
       console.log(this.props);
    }

    
    
    render() {
        var lists = [];
        let show = null;
        if(this.props.board.data){
            for (let list_name in this.props.board.data.lists){
                lists.push(list_name);
            }
            show = (
                <div className = {classes.listContainer}>
                    {lists.map((list,index) => {
                        return <List 
                                name = {list} 
                                key = {index} 
                                items = {this.props.board.data.lists[list]} />
                    })}
                </div>
            )
             
        }
        
           

        return(
            
        <div className = {classes.main} style = {{backgroundImage: "url(" + this.props.board.img + ")"}}>
                <Strip name = {this.props.board.name}/>
                {show}
            </div>
        )     
    }
}


export default withRouter(FullBoard);