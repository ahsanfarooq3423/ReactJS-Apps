import React, {Component} from 'react';
import classes from './FullBoard.module.css';



class FullBoard extends Component {


    render() {
     


 
        console.log(this.props.current.url);
        return(
           
            <div className = {classes.main} style = {{backgroundImage: "url(" + this.props.current.url + ")"}}>
                <h1>{this.props.current.name}</h1>
            </div>
            

            
            

        )
        
    }
}


export default FullBoard;