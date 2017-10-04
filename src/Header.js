import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Hero from './Hero';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="background-wrapper" class="toronto">
            <div id="navigation" class="wrapper">

                <div class="header">
                    <div class="header-inner container">
                        <div class="row">
                            <div class="col-md-8">

                                <a class="navbar-brand" href="index.html" title="Home">
                                    <h1 class="hidden">
                                        <img src="img/c18toronto_logo.png" alt="Convention Logo" />
                                            Toronto 2018
                                    </h1>
                                </a>
                                <div class="navbar-slogan">
                                    Inspiration around<br />every corner
                                </div>
                            </div>

                            <div class="col-md-4">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="navbar navbar-default">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>

                        <div class="navbar-collapse collapse">
                            <ul class="nav navbar-nav" id="main-menu">
                                <li class="icon-link">
                                    <Link to="/"><i class="fa fa-home"></i></Link>
                                </li>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/news">News</Link></li>
                                <li><Link to="/hof">House of Friendship</Link></li>
                                <li class="dropdown dropdown-mm">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">HOC<b class="caret"></b></a>

                                    <ul class="dropdown-menu dropdown-menu-mm dropdown-menu-persist">
                                        <li class="row">
                                            <ul class="col-md-6">
                                                <li class="dropdown-header">Volunteer</li>
                                                <li><a href="volunteer.html">Be a Volunteer</a></li>
                                                <li><a href="https://app.vroomhq.com/s/rotary-2018">Go to VROOM!</a></li>
                                            </ul>
                                            <ul class="col-md-6">
                                                <li class="dropdown-header">Host Hospitality</li>
                                                <li><a href="hosthospitality.html">Learn More</a></li>
                                                <li><a href="https://docs.google.com/a/rotary7070.ca/forms/d/e/1FAIpQLSeMeOB7oSrj55pMvePRTlVuOjvFd0wiF7GNxGmzFgI3rSep9Q/viewform">Register to Host</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-footer">
                                            <div class="row">
                                                <div class="col-md-7">The HOC is looking for input from Rotarians. <strong>Send us your ideas.</strong></div>
                                                <div class="col-md-5">
                                                    <a href="ideas.html" class="btn btn-more btn-lg pull-right"><i class="fa fa-users"></i> Submit Ideas</a>
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
