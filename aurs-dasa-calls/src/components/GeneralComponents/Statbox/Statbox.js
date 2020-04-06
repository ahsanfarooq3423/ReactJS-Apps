import React from 'react'
import { Card } from 'react-bootstrap';
import classes from './Statbox.module.css';

const style = {
    width: '20rem',
    borderRadius: '12px ',
    cursor : 'pointer',
    height : '99%'
}

const Statbox = props => {
    return (
        <div className = {classes.main}>
        <Card style={style}>
            <Card.Body>
                <Card.Subtitle className="mb-1 text-muted">{props.data.title}</Card.Subtitle>
                {props.data.image ? <img  
                    className = "float-right" 
                    src = {props.data.image}/>: null}
                <Card.Title className="mb-3" style = {{fontSize : '40px'}}>{props.data.subtitle}</Card.Title>
                <Card.Text className="text-muted">
                   {props.data.content}
            </Card.Text>
            </Card.Body>
        </Card>
        </div>

    )
}
export default Statbox