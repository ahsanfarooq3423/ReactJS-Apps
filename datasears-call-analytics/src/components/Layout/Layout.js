import React, {Component} from 'react';
import Aux from '../../containers/hoc/Aux/Aux';


class Layout extends Component {
    render() {
        return(
            <Aux>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout;