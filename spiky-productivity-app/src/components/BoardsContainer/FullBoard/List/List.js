import React, {Component} from 'react';
import Card from './Card/Card';
import classes from './List.module.css';
import NewCard from './Card/NewCard/NewCard';
import ReactDOM from 'react-dom';



class List extends Component {

    

    state = {
        actions : false
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }
    
    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);
    
        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                actions: false
            });
        }
    }



    listActionsHandler = () => {
        let bool = this.state.actions;
        this.setState({actions : !bool })
    }

    changeHandler = () => {
        console.log('input changed')
    }

    
   
    render(){
        

        let cards = [];
        if (this.props.items){
            for (let card in this.props.items.items){
                cards.push(card);
            }
        }

        
        


        let title = <input
                        onChange = {this.changeHandler} 
                        type = 'text' 
                        value = {this.props.name} 
                        className = {classes.titleInput}/>
        return(
            <div className = {classes.list}>
                <div className = {classes.title} >
                    <div className = {classes.field}>{title}</div>
                    <div className = {classes.more}>
                        <p onClick = {this.listActionsHandler}>...</p>
                        {this.state.actions ?
                        <div className = {classes.dropdown} >
                        <div>
                            <div className = {classes.actions}>List Actions</div>
                           
                            <div className = {classes.delete}>Delete this List...</div>
                        </div>
                    </div>: null }
                        
                    </div>
                </div>

                <div>
                    {cards.map((card,index) => {
                        return <Card 
                                key = {index}
                                card = {card} />
                    })}

                    <NewCard 
                        submitcard = {() => this.props.submitcard(this.props.name)}
                        newcard = {this.props.newcard}/>

                </div>
                
            </div>
        )
    }
}


export default List;