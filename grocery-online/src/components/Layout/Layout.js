import React, {Component} from 'react';
import Aux from '../../containers/hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';


class Layout extends Component {
    

    render(){
        return(
            <Aux>
                <Toolbar info = {this.props.children.type}/>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout;