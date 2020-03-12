import React from 'react';
import ScreenCard from './ScreenCard/ScreenCard';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Screens.module.css';
import { connect } from 'react-redux';



const screens = props => {
    return(
        <div className = {classes.main}>
            {props.loading ? <div className = {classes.spinner}>
                <Spinner/>
            </div> : <ScreenCard/>  }
        </div>
    )
}

const mapStateToProps = state => {
    return {
      loading: state.authState.loading
    }
  }

export default connect(mapStateToProps)(screens);

