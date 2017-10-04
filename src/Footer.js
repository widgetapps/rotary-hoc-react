import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Footer extends Component {
    render() {
        return (
            <div>
            <div class="block block-pd-sm block-bg-primary">
                <div class="container">
                    <div class="row">
                        <h3 class="col-md-4">
                            Our Sponsors
                        </h3>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="text-right">If you're interested in sponsoring this event, please contact:<br />
                                    <a class="btn btn-success" href="mailto:sponsors@rotary2018.org">sponsors@rotary2018.org</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <footer id="footer" class="block block-bg-grey-dark" data-block-bg-img="img/bg_footer-map.png" data-stellar-background-ratio="0.4">
            <div class="container">

                <div class="row" id="contact">
                </div>

                <div class="row subfooter">
                    <div class="col-md-7">
                        <p>Copyright © Toronto 2018 Host Organizing Committee</p>

                    </div>
                    <div class="col-md-5">
                        <ul class="list-inline pull-right">
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <a href="#top" class="scrolltop">Top</a>

            </div>
        </footer>
            </div>
        );
    }
}

export default Footer;
