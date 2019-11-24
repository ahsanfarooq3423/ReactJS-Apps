import React, {Component} from 'react';
import AllNotes from '../../components/AllNotes/AllNotes';
import { connect } from 'react-redux';

class NotesApp extends Component {

    

    render(){
        return(
            <div>
                <AllNotes notes = {this.props.notes}/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        notes : state.notes
    }
}

export default  connect(mapStateToProps)(NotesApp);