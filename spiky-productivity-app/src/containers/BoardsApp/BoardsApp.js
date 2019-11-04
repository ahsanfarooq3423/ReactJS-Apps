import React, {Component} from 'react';
import classes from './BoardsApp.module.css';
import LeftNavigation from '../../components/BoardsContainer/LeftNavigation/LeftNavigation';
import Boards from '../../components/BoardsContainer/Boards/Boards';
import NewBoard from '../../components/BoardsContainer/Boards/NewBoard/NewBoard';
import FullBoard from '../../components/BoardsContainer/FullBoard/FullBoard';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../hoc/Aux/Aux';
import {Route} from 'react-router-dom';



class BoardsApp extends Component {

    state = {
        boards: {
            'work' : {
                name: 'Work',
                img : 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                data : {
                    lists : {
                        'project1' : {
                            items : {
                                'do the meeting' : {
                                    description : null
                                },
                                'make the call' : {
                                    description : null
                                },
                                'meet the client' : {
                                    description : null
                                },
                                'deploy to server' : {
                                    description : null
                                },
                                
                            }
                        },
                        'client' : {
                            items : {
                                'message about game' : {
                                    description : null
                                },
                                'meet the seniors' : {
                                    description : null
                                },
                                'dashboard' : {
                                    description : null
                                },
                                'build game' : {
                                    description : null
                                },
                                
                            }
                        }
                        
                    }
                }

            },
            'gym' : {
                name: 'GYM',
                img : 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',

            },
            'project' : {
                name: 'Project',
                img : 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',

            },
            'email' : {
                name: 'Email',
                img : 'https://images.unsplash.com/photo-1557568192-2fafc8b5bdc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',

            },
            'books' : {
                name: 'Books',
                img : 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',

            },
            'gallery' : {
                name: 'Gallery',
                img : 'https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2030&q=80',

            },
            'pets' : {
                name: 'Pets',
                img : 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80',

            },
            'photography' : {
                name: 'Photograpy',
                img : 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',

            },

        },
        selectboard : 
            //temp setting
            {name: "Work", 
             url: "https://images.unsplash.com/photo-1517048676732-d6…cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"},
        
             newboard : {
            show : false,
            button : true //need to update the functionality later
        },
        currentboard : 'work',
        modal : false,
        fullboard : false
    }

    getNewBoardHandler = () => {
        let newboard = {...this.state.newboard};
        newboard.show = true;
        this.setState({newboard : newboard, modal : true});
    }

    getBoardInfo = (info) => {
        console.log(info);
         let board = info.name;
         let name = board.charAt(0).toUpperCase() + board.slice(1);
         let url = info.url;
         let boards = {...this.state.boards};
       
        if (info.name.length > 0) {
            
            boards[board] = {
                name : name,
                url : url
            }
        }

        let newboard = {...this.state.newboard};
        newboard.show = false;
        

        this.setState({boards : boards, newboard : newboard, modal : false});
        console.log(this.state.modal)
    }


    cancelNewBoard = () => {
        let newboard = {...this.state.newboard};
        newboard.show = false;
        this.setState({newboard : newboard, modal : false});
    }


    currentBoardHandler = (selectboard)  => {
        this.setState({selectboard : selectboard, fullboard : true});
        
    }

    homePageStateHandler = () => {
        this.setState({fullboard : false}); 
    }



    render(){
        let mainpage = (
            <div className = {classes.container} >
            <LeftNavigation/>
                <Boards 
                    boards = {this.state.boards} 
                    createnew = {this.getNewBoardHandler}
                    click = {this.currentBoardHandler} />
                    {this.state.modal ? <Modal
                    clicked = {this.cancelNewBoard} 
                    show = {this.state.newboard.show} 
                    width = "423px" height = "250px">
                    <NewBoard 
                        close = {this.cancelNewBoard}
                        getinfo = {this.getBoardInfo} 
                        showbutton = {this.state.newboard.button} />
                </Modal> : null}
                
                </div>
        )

        return(
            <Aux>
                {/* <Toolbar homestate = {this.homePageStateHandler} blur = {this.state.fullboard}/>
                <Route path = "/" exact component = {() => mainpage} />
                {this.state.selectboard ?
                    <Route path = {"/boards/" +  this.state.selectboard.name.toLowerCase()} 
                        component = {() => <FullBoard 
                                            current = {this.state.selectboard}  />} /> : null} */}

                    <FullBoard 
                        current = {{name: "Work", 
                        url: "https://images.unsplash.com/photo-1517048676732-d6…cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}}
                        board = {this.state.boards['work']} />
                                     
                
            </Aux>
        )
    }
}

export default BoardsApp;