import React from 'react';
import TopBox from './TopBox/TopBox';
import ContentBox from './ContentBox/ContentBox';
import ButtonBox from './ButtonBox/ButtonBox';
import classes from './FullPost.module.css';


const fullpost = () => {
    return(
        <div className = {classes.container}>
            <TopBox/>
            <ContentBox/>
            <ButtonBox/>
        </div>
    )
   
}

export default fullpost;    

