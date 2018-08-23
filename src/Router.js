import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

import NavBar from './components/navbar';

import { connect } from 'react-redux';

class AppRouter extends Component {


    render() {
        return (
            <Router>

                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>

            </Router>
        )
    }
}


export default AppRouter;
