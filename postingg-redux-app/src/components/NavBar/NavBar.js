import React from 'react';
import classes from './NavBar.module.css';
import Aux from '../../containers/hoc/Aux/Aux';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import AuthorInfo from '../Posts/PostList/AuthorInfo/AuthorInfo';
import * as actions from '../../store/actions/index';

const navbar = (props) => {
    let userName = null;
    if (props.isAuthenticated){
        if (props.users){
            console.log(props.users)
            for (let i in props.users) {
                if (props.users[i].id === props.auth.userId){
                    userName = props.users[i].name
                } 
            }
            console.log(userName)
            userName = userName.charAt(0).toUpperCase() + userName.slice(1);

        }
    }


    return(
    <div className  = {classes.mainnav}>
        <nav role={classes.navigation}>
        <div className={classes.menuToggle}>
        
            <input type="checkbox" />
            
        
            <span></span>
            <span></span>
            <span></span>
            
            <ul className={classes.menu}>
            <p className = {classes.brandtoggle}>Posting App</p>
            <Link to = "/"><li>Home</li></Link>
            <Link to = "/"><li>All Posts</li></Link>
            {!props.isAuth ?
            <Aux>
                <Link to = "/login" ><li>Login</li></Link>
                <Link to = "/signup"><li>Sign Up</li></Link>
            </Aux> 
             :
             <Aux>
                <AuthorInfo  author = {userName}/>
                <p>Logout</p>
             </Aux>
            }
           
            </ul>
        </div>
        </nav>




        <div className = {classes.leftnav}>
            <p className = {classes.brand}>Posting App</p>
            <div className = {classes.leftlinks}>
                <p onClick = {() => {
                    let to = "/"
                    props.history.push(to)
                }}>Home</p>
                <p onClick = {() => {
                    let to = "/"
                    props.history.push(to)
                }}>All Posts</p>
            </div>
            
        </div>
        {!props.isAuth ? <div className = {classes.rightnav}>
            <p onClick = {()=> {
                let to = "/login"
                props.history.push(to)
                props.onSwitch()
            }}>Login</p>
            <p onClick = {()=> {
                let to = "/signup"
                props.history.push(to)
                props.onSwitch()
            }}>Sign Up</p>
        </div> :<div className = {classes.profile}> 
                     <AuthorInfo  author = {userName}/>
                     <p onClick = { props.onLogout}>Logout</p>
                </div>
         }
       
    </div>
    )
    
}


const mapStateToProps = state => {
    return {
        users : state.usersState.users,
        auth : state.authState,
        isAuthenticated : state.authState.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSwitch : () => dispatch(actions.switchAuth()),
        onLogout : () => dispatch(actions.logout())
    }
}

export default withRouter(connect(mapStateToProps ,mapDispatchToProps)(navbar));
