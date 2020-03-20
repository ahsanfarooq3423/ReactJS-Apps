import React, {Fragment} from 'react';
import Header from '../../components/LandingComponents/Header/Header';
import Demo from '../../components/LandingComponents/Demo/Demo';
import Working from '../../components/LandingComponents/Working/Working';



const landing = () => {
    return(
        <Fragment>
            <Header/>
            <Demo/>
            <Working/>
        </Fragment>
    )
}

export default landing;