import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import footergb from './img/bg_footer-map.png';
import './Header.css';

class Footer extends Component {
    render() {
        let submitForm = function(){
            var action = 'https://formspree.io/' + document.getElementById('contactreason').value;
            document.getElementById('contactform').action = action;
            //alert('https://formspree.io/' + document.getElementById('contactreason').value);
        };

        return (
            <div>
            <div className="block block-pd-sm block-bg-primary">
                <div className="container">
                    <div className="row">
                        <h3 className="col-md-4">
                            Our Sponsors
                        </h3>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="text-right">If you're interested in sponsoring this event, please contact:<br />
                                    <a className="btn btn-success" href="mailto:sponsors@rotary2018.org">sponsors@rotary2018.org</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <footer id="footer" className="block block-bg-grey-dark" data-block-bg-img={footergb} data-stellar-background-ratio="0.4">
            <div className="container">

                <div className="row" id="contact">
                    <div className="col-md-9">
                        <h4 className="text-uppercase">
                            Contact Us
                        </h4>
                        <div className="form">
                            <div id="sendmessage">Your message has been sent. Thank you!</div>
                            <div id="errormessage"></div>
                            <form id="contactform" action="" onSubmit={submitForm} method="post" role="form" className="contactForm">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="_replyto" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <select class="form-control" name="reason" id="contactreason">
                                        <option value="0">What is your email regarding...</option>
                                        <option value="accommodations@rotary2018.org">Accommodations</option>
                                        <option value="clothing@rotary2018.org">Clothing</option>
                                        <option value="registration@rotary2018.org">Convention Registration</option>
                                        <option value="exhibitors@rotary2018.org">Exhibitors</option>
                                        <option value="hosthospitality@rotary2018.org">Host Hospitality</option>
                                        <option value="hofsupport@rotary2018.org">House of Friendship Support</option>
                                        <option value="sponsors@rotary2018.org">Sponsorship</option>
                                        <option value="events@rotary2018.org">Ticketed Events</option>
                                        <option value="volunteer@rotary2018.org">Volunteering</option>
                                        <option value="info@rotary2018.org">General Inquiry</option>
                                    </select>
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="_subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validation"></div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                                <input type="text" name="_gotcha" className="hidden" />
                                <input type="hidden" name="_next" value="http://rotary2018.org/thanks" />
                            </form>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <h4 className="text-uppercase">
                            Follow Us On:
                        </h4>
                        <div className="social-media social-media-stacked">
                            <a href="https://twitter.com/RotaryTO2018"><i class="fa fa-twitter fa-fw"></i> Twitter</a>
                            <a href="https://www.facebook.com/RotaryTO2018/"><i class="fa fa-facebook fa-fw"></i> Facebook</a>
                            <a href="https://www.instagram.com/RotaryTO2018/"><i class="fa fa-instagram fa-fw"></i> Instagram</a>
                        </div>

                    </div>
                </div>

                <div className="row subfooter">
                    <div className="col-md-7">
                        <p>Copyright © Toronto 2018 Host Organizing Committee</p>

                    </div>
                    <div className="col-md-5">
                        <ul className="list-inline pull-right">
                        </ul>
                    </div>
                </div>

                <a href="#top" className="scrolltop">Top</a>

            </div>
        </footer>
            </div>
        );
    }
}

export default Footer;
