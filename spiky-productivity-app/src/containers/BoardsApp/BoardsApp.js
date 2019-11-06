import React, {Component} from 'react';
import classes from './BoardsApp.module.css';
import LeftNavigation from '../../components/BoardsContainer/LeftNavigation/LeftNavigation';
import Boards from '../../components/BoardsContainer/Boards/Boards';
import NewBoard from '../../components/BoardsContainer/Boards/NewBoard/NewBoard';
import FullBoard from '../../components/BoardsContainer/FullBoard/FullBoard';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../hoc/Aux/Aux';
import {Route, withRouter, Switch} from 'react-router-dom';



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
                data : {
                    lists : {
                        'squats' : {
                            items : {
                                'watch the video' : {
                                    description : null
                                },
                                '10 kgs additions' : {
                                    description : null
                                },
                                'shoe alignment' : {
                                    description : null
                                },
                                'make 4 reps' : {
                                    description : null
                                },
                                
                            }
                        },
                        'protien shake' : {
                            items : {
                                'research about shake' : {
                                    description : null
                                },
                                'demand for more' : {
                                    description : null
                                },
                                'choclate flavour' : {
                                    description : null
                                },
                                'room for legs' : {
                                    description : null
                                },
                                'Baby boss' : {
                                    description : null
                                },
                                '25gs research' : {
                                    description : null
                                },
                                
                            }
                        },
                        'bench press' : {
                            items : {
                                'research about shake' : {
                                    description : null
                                },
                                'demand for more' : {
                                    description : null
                                },
                                'choclate flavour' : {
                                    description : null
                                },
                                'chest position' : {
                                    description : null
                                },
                                'room for improvement' : {
                                    description : null
                                },
                                'max reps' : {
                                    description : null
                                },
                                'what science says' : {
                                    description : null
                                },
                                'making more hash reps' : {
                                    description : null
                                },
                                'what is true' : {
                                    description : null
                                },
                                'the asap science' : {
                                    description : null
                                },
                                'picture fit' : {
                                    description : null
                                },
                                'stay on the ground' : {
                                    description : null
                                }
                                
                            }
                        }
                        
                    }
                }
            },
            'project' : {
                name: 'Project',
                img : 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                data : {
                    lists : {
                        'marketing' : {
                            items : {
                                'do the marketing' : {
                                    description : null
                                },
                                'make the call' : {
                                    description : null
                                },
                                'come home' : {
                                    description : null
                                },
                                'advertisement' : {
                                    description : null
                                },
                                'advertisement insta' : {
                                    description : null
                                },
                                
                            }
                        },
                        'facebook ads' : {
                            items : {
                                'pay the client' : {
                                    description : null
                                },
                                'age limit' : {
                                    description : null
                                },
                                'target audience' : {
                                    description : null
                                },
                                'analytics' : {
                                    description : null
                                },
                                
                            }
                        }
                        
                    }
                }
            },
            'email' : {
                name: 'Email',
                img : 'https://images.unsplash.com/photo-1557568192-2fafc8b5bdc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                data : {
                    lists : {
                        'gmail' : {
                            items : {
                                'sign Up' : {
                                    description : null
                                },
                                'Ali Baba Edition' : {
                                    description : null
                                },
                                'Juniors meet seniors' : {
                                    description : null
                                },
                                'deploy to server' : {
                                    description : null
                                },
                                
                            }
                        },
                        
                    }
                }
            },
            'books' : {
                name: 'Books',
                img : 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                data : {
                    lists : {
                        'books to buy' : {
                            items : {
                                'mba' : {
                                    description : null
                                },
                                'baby boss' : {
                                    description : null
                                },
                                'the sleep cycle' : {
                                    description : null
                                },
                                'imitation game' : {
                                    description : null
                                },
                                'joker' : {
                                    description : null
                                },
                                'made it to the top' : {
                                    description : null
                                },
                                'biography' : {
                                    description : null
                                },
                                
                            }
                        },
                        'books to read' : {
                            items : {
                                'the unthethered soul' : {
                                    description : null
                                },
                                'The baws' : {
                                    description : null
                                },
                                'da vinci code' : {
                                    description : null
                                },
                                'how fluke works' : {
                                    description : null
                                },
                                
                            }
                        }
                        
                    }
                }
            },
            'gallery' : {
                name: 'Gallery',
                img : 'https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2030&q=80',
                data : {
                    lists : {
                        'Pictures' : {
                            items : {
                                'done' : {
                                    description : null
                                },
                                'shaadi picture' : {
                                    description : null
                                },
                                'trip pictures' : {
                                    description : null
                                },
                                'to be edited' : {
                                    description : null
                                },
                                
                            }
                        },
                        'Documentaries' : {
                            items : {
                                'Game of thrones' : {
                                    description : null
                                },
                                'how a guy took 10000 photos' : {
                                    description : null
                                },
                                'the man behind dawk' : {
                                    description : null
                                },
                                'baby boss' : {
                                    description : null
                                },
                                
                            }
                        }
                        
                    }
                }
            },
            'pets' : {
                name: 'Pets',
                img : 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80',
                data : {
                    lists : {
                        'dogs' : {
                            items : {
                                'wash the dog' : {
                                    description : null
                                },
                                'bring the food' : {
                                    description : null
                                },
                                'the health documentary' : {
                                    description : null
                                },
                                'go for a walk' : {
                                    description : null
                                },
                                
                            }
                        },
                        'cats' : {
                            items : {
                                'WHY CATS CANT BE TRUSTED' : {
                                    description : null
                                },
                                'hate for cats' : {
                                    description : null
                                },
                                'cats are not wild' : {
                                    description : null
                                },
                                'build game' : {
                                    description : null
                                },
                                'talking parrotss' : {
                                    description : null
                                },
                                
                            }
                        },
                        'parrots' : {
                            items : {
                                '10 photos' : {
                                    description : null
                                },
                                'dream views' : {
                                    description : null
                                },
                                'dashboard' : {
                                    description : null
                                },
                                'parrots' : {
                                    description : null
                                },
                                
                            }
                        },
                        'goats' : {
                            items : {
                                'sheep' : {
                                    description : null
                                },
                                'lamb roast' : {
                                    description : null
                                },
                                'bbq' : {
                                    description : null
                                },
                                'beef' : {
                                    description : null
                                },
                                
                            }
                        }
                        
                    }
                }
            },
            'photography' : {
                name: 'Photography',
                img : 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
            },

        },
        selectboard : this.props.location.pathname.slice(8,this.props.location.pathname.length +1),
        
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
         let board = info.name;
         let name = board.charAt(0).toUpperCase() + board.slice(1);
         let url = info.url;
         let boards = {...this.state.boards};
       
        if (info.name.length > 0) {
            
            boards[board] = {
                name : name,
                url : url
            }

            boards[board].data = null;

        }

        let newboard = {...this.state.newboard};
        newboard.show = false;
        

        this.setState({boards : boards, newboard : newboard, modal : false});
    }


    cancelNewBoard = () => {
        let newboard = {...this.state.newboard};
        newboard.show = false;
        this.setState({newboard : newboard, modal : false});
    }


    currentBoardHandler = (selectboard)  => {
        let name = selectboard.name.toLowerCase();
        //console.log(this.props);
        this.setState({selectboard : name, fullboard : true});
        
    }

    homePageStateHandler = () => {
        this.setState({fullboard : false}); 
    }

    addNewListHandler = (data) => {
       console.log(data);
       let boards = JSON.parse(JSON.stringify(this.state.boards));
       let identifier = data.name.toLowerCase();
       boards[identifier] = data;
       this.setState({boards : boards});
    }

    addNewCardHandler = (data) => {
       console.log(data);
       let boards = JSON.parse(JSON.stringify(this.state.boards));
       let identifier = data.name.toLowerCase();
       boards[identifier] = data;
       this.setState({boards : boards});
    }

    updateBoardHandler = (data) => {
       let boards = JSON.parse(JSON.stringify(this.state.boards));
       let identifier = data.name.toLowerCase();
       boards[identifier] = data;
       this.setState({boards : boards});
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
                <Toolbar homestate = {this.homePageStateHandler} blur = {this.state.fullboard}/>
                <Switch>
                <Route path = "/" exact component = {() => mainpage} />
                {this.state.selectboard ?
                    <Route 
                        path = {this.props.location.pathname}
                        component = {() => <FullBoard
                                                newcard = {this.updateBoardHandler}
                                                newlist = {this.updateBoardHandler} 
                                                board = {this.state.boards[this.state.selectboard]} />} /> : null}
                
                </Switch>
                
            </Aux>
        )
    }
}

export default withRouter(BoardsApp);