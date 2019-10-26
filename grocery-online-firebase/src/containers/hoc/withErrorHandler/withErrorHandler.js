import React , {Component}from 'react';

import Modal from '../../../components/UI/Modal/Modal';
import Aux from '../Aux';


const withErrorHandler = ( WrappedComponent, axios ) => {
    

    return class extends Component {


        state = {
            error : null
        }
    
        componentDidMount = () => {

            axios.intercept.request.use(req => {
                this.setState({error : null})
            })
    
            axios.intercept.response.use(null, error => {
                this.setState({error : error})
            })
    
            
        }

        render(){
            return (
                <Aux>
                    <Modal show >
                        Something went wrong ...
                    </Modal>
    
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
        
    }
}

 
export default withErrorHandler;