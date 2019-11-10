import React, {Component} from 'react';
import Strip from './Strip/Strip';
import classes from './FullBoard.module.css';
import List from './List/List';
import {withRouter} from 'react-router-dom';
import Aux from '../../../containers/hoc/Aux/Aux';
import NewList from './List/NewList';
import Confirmation from './Strip/Confirmation/Confirmation';
import Modal from '../../UI/Modal/Modal';


class FullBoard extends Component {

   

    state = {
        newlistName : null,
        newCardName : null,
        confirmation : false

    }

    // componentDidMount () {
    //     axios.get('https://api.unsplash.com/search/photos?query=work&client_id=e4f0158a90e38860116bfe0a110ac38a78672be85962db3dd788ee13d0464d19')
    //         .then(res => {
    //             var img_array = res.data.results;
    //             var img_urls = []
    //             for (var i in img_array){
    //                 img_urls.push(img_array[i].urls.full)
    //             }

    //             console.log(img_urls)
    //         })
    // }


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
                    items : {
                        
                    }
                }
            }
        }
        this.props.newlist(newboard)
    }


    deleteboardHandler = () => {
        this.setState({confirmation : true});
        //this.props.deleteboard(this.props.board)
    }


    cancelDeleteHandler = () => {
        this.setState({confirmation : false});
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
                                    deletecard = {this.props.deletecard}
                                    deletelist = {this.props.deletelist}
                                    board = {this.props.board}
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
            <Strip
                
                delete = {this.deleteboardHandler} 
                name = {this.props.board.name}/>
            {show}
        </div>)
            
        }

        
 
        return(
            <Aux>
            {main}
            {this.state.confirmation ? <Modal
                clicked = {this.cancelDeleteHandler}
                width = '450px'
                height = '100px'
             show = {this.state.confirmation}
             >
                <Confirmation 
                    deleteboard = {() => this.props.deleteboard(this.props.board)}
                    cancel = {this.cancelDeleteHandler}/>
            </Modal>: null}
            </Aux>
        )     
    }
}


export default withRouter(FullBoard);