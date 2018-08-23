import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render(){
        
        return(
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-logo">
                    <Link className='nav-text-name' to="/">StackLine</Link>
                </div>
                </nav>     
            </div>
        );
    }
}