import React from 'react';
import classes from './PostCard.module.css';


const postcard = (props) => {
    
    return (
        <div className = {classes.maincard}
        onClick = {() => {
            props.onViewPost(props.post)
            let to = "/fullpost"
            props.history.push(to)
        }}>
            <div className = {classes.imgdiv}>
                <img alt = "landscape" src = {props.src}/>
            </div>

            <div className = {classes.infodiv}>
                <p className = {classes.title}>{props.title}</p>
                <div className = {classes.subinfo}>
                    <p className = {classes.sent}>by</p>
                    <p className = {classes.author}>{props.author}</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default postcard;