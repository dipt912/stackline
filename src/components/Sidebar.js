import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemDetails from './ItemDetails';
class Sidebar extends Component {
    render(){
        
        return(
            <div className="left-sidebar">
                 <ItemDetails itemData={this.props.appData}/>   
            </div>
        );
    }
}
const mapStateToProps = (state)=> {
    console.log("state", state);
    return {
        appData: state.appData
    };
}

export default connect(mapStateToProps)(Sidebar);