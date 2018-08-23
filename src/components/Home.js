import React, { Component } from 'react';
import Sidebar from './Sidebar';
import GraphContainer from './GraphContainer';
import Details from './Deatils';
class Home extends Component {

    render() {
        return (
            <div className="row s12 main-container">
                <div className="col s3">
                    <Sidebar />
                </div>
                <div className="col s9">
                    <GraphContainer />
                    <Details/>
                </div>
            </div>
        );
    }
}


export default Home;
