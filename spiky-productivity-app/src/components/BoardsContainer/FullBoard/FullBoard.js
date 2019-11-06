import React, {Component} from 'react';
import Strip from './Strip/Strip';
import classes from './FullBoard.module.css';
import List from './List/List';
import {withRouter} from 'react-router-dom';
import Aux from '../../../containers/hoc/Aux/Aux';
import NewList from './List/NewList';



class FullBoard extends Component {


    state = {
        newlistName : null
    }

    componentWillMount() {
       console.log(this.props.board);
    }

    newlistNameHanlder = (event) => {
        this.setState({newlistName : event.target.value})
    }

    
    
    render() {
        var lists = [];
        let show = null;
        if(this.props.board){
            if(this.props.board.data){
                for (let list_name in this.props.board.data.lists){
                    lists.push(list_name);
                }
                show = (
                    <Aux>

                        
                    <div className = {classes.listContainer}>
                        {lists.map((list,index) => {
                            return <List 
                                    name = {list} 
                                    key = {index} 
                                    items = {this.props.board.data.lists[list]} />
                        })}
                 
                        <NewList newlistname = {this.newlistNameHanlder}/>
                    </div>

                
                        
             
                    

                    
                    </Aux>
                )
                 
            }
        }
        else {
            show = <h1>The above url not found.</h1>
        }

        let main = <h1>The above url not found.</h1>;
        if (this.props.board) {
            main = (<div className = {classes.main} style = {{backgroundImage: "url(" + this.props.board.img + ")"}}>
            <Strip name = {this.props.board.name}/>
            {show}
        </div>)
            
        }

        
 
        return(
            <Aux>
            {main}
            </Aux>
        )     
    }
}


export default withRouter(FullBoard);