import React, {Component} from 'react';
import Aux from '../../containers/hoc/Aux';

class Layout extends Component {
    render(){
        return(
            <Aux>
                <p>Toolbar, SideDrawer ....</p>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout;