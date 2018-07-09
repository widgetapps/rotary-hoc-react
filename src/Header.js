import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Hero from './Hero';

class Header extends Component {

    render() {
        return (
            <div id="background-wrapper" className="toronto">
            <div id="navigation" className="wrapper">

                <div className="header">
                    <div className="header-inner container">
                        <div className="row">
                            <div className="col-md-8">

                                <a className="navbar-brand" href="/" title="Home">
                                    <h1 className="hidden">
                                        <img src="img/c18toronto_logo.png" alt="Convention Logo" />
                                            Toronto 2018
                                    </h1>
                                </a>
                                <div className="navbar-slogan">
                                    Inspiration around<br />every corner
                                </div>
                            </div>

                            <div className="col-md-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Hero>
                    {this.props.children}
                </Hero>
            </div>
        );
    }
}

export default Header;
