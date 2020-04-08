import React, {Fragment} from 'react';
import Header from '../../components/LandingComponents/Header/Header';
import Demo from '../../components/LandingComponents/Demo/Demo';
import Working from '../../components/LandingComponents/Working/Working';
import Products from '../../components/LandingComponents/Products/Products';
import Footer from '../../components/LandingComponents/Footer/Footer';




const landing = () => {
    return(
        <Fragment>
            <Header/>
            <Demo/>
            <Working/>
            <Products/>
            <Footer/>
        </Fragment>
    )
}

export default landing;