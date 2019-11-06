import React, {Component} from 'react';
import Strip from './Strip/Strip';
import classes from './FullBoard.module.css';
import List from './List/List';
import {withRouter} from 'react-router-dom';
import Aux from '../../../containers/hoc/Aux/Aux';
import NewList from './List/NewList';



class FullBoard extends Component {


    state = {
        newlistName : null,
        newCardName : null

    }

    

    newlistNameHanlder = (event) => {
        let list_name = event.target.value;
        this.setState({newlistName : list_name});
    }

    newCardNameHandler = (event) => {
        let card_name = event.target.value
        this.setState({newCardName : card_name});
        
    }

    submitCardHanlder = (list) => {
        
        let name = this.state.newCardName;
        let newboard = JSON.parse(JSON.stringify(this.props.board));
        console.log(newboard);
        if (name){
            if (name.length >0) {
                //console.log(newboard.data.lists[list].items);
                if (newboard.data.lists[list].items){
                    newboard.data.lists[list].items[name] = {
                        description : null
                    };   
                }
                else {
                    console.log(newboard.data.lists[list].items)
                    newboard.data.lists[list].items[name] = null;  
                }
                 
            }
        }
        this.props.newcard(newboard);
    }


    sumbitListHandler = () => {
        
        let name = this.state.newlistName;
        //let newboard = {...this.props.board};
        let newboard = JSON.parse(JSON.stringify(this.props.board));

        if (name){
            if (name.length >0) {
                newboard.data.lists[name] = {
                    items : null
                }
            }
        }
        
        this.props.newlist(newboard)
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
                                    submitcard = {this.submitCardHanlder}
                                    newcard = {this.newCardNameHandler}     
                                    name = {list} 
                                    key = {index} 
                                    items = {this.props.board.data.lists[list]} />
                        })}
                 
                        <NewList 
                            newlistname = {this.newlistNameHanlder}
                            submit = {this.sumbitListHandler}/>
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