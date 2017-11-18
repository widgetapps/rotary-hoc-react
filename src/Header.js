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
                <div className="container">
                    <div className="navbar navbar-default">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>

                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav" id="main-menu">
                                <li className="icon-link">
                                    <Link to="/"><i className="fa fa-home"></i></Link>
                                </li>

                                <li><Link to="/events/hoc/1">Events</Link></li>
                                <li><Link to="/news">News</Link></li>
                                <li><Link to="/hof">House of Friendship</Link></li>
                                <li><a href="https://toronto-2018-rotary-convention.myshopify.com/" target="shop">Shop</a></li>
                                <li className="dropdown dropdown-mm">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">HOC<b className="caret"></b></a>

                                    <ul className="dropdown-menu dropdown-menu-mm dropdown-menu-persist">
                                        <li className="row">
                                            <ul className="col-md-4">
                                                <li className="dropdown-header">Volunteer</li>
                                                <li><Link to="/volunteer">Be a Volunteer</Link></li>
                                                <li><a href="https://app.vroomhq.com/s/rotary-2018">Go to VROOM!</a></li>
                                            </ul>
                                            <ul className="col-md-4">
                                                <li className="dropdown-header">Host Hospitality</li>
                                                <li><Link to="/host">Learn More</Link></li>
                                                <li><a href="https://docs.google.com/a/rotary7070.ca/forms/d/e/1FAIpQLSeMeOB7oSrj55pMvePRTlVuOjvFd0wiF7GNxGmzFgI3rSep9Q/viewform">Register to Host</a></li>
                                            </ul>
                                            <ul className="col-md-4">
                                                <li className="dropdown-header">HOC Resources</li>
                                                <li><Link to="/clubevent">Post a Club Event</Link></li>
                                                <li><Link to="/files">Files</Link></li>
                                                <li><Link to="/about">About the HOC</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-footer">
                                            <div className="row">
                                                <div className="col-md-7">The HOC is looking for input from Rotarians. <strong>Send us your ideas.</strong></div>
                                                <div className="col-md-5">
                                                    <a href="ideas.html" className="btn btn-more btn-lg pull-right"><i className="fa fa-commenting"></i> Submit Ideas</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
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
