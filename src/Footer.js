import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import footergb from './img/bg_footer-map.png';
import './Header.css';

class Footer extends Component {
    render() {
        let submitForm = function(e){
            if (document.getElementById('contactreason').value === 0) {
                e.preventDefault();
                return false;
            }

            document.getElementById('contactform').action = 'https://formspree.io/' + document.getElementById('contactreason').value;
            //alert('https://formspree.io/' + document.getElementById('contactreason').value);
        };

        return (
            <div>
            <div className="block block-pd-sm block-bg-primary">
                <div className="container">
                    <div className="row">
                        <h3 className="col-md-12">Sponsors</h3>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="sponsorbox">
                                <img src="/img/sponsors/BM_4color_HOR_Screen_ENG.png" className="logo img-responsive" alt="Bell Media" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="sponsorbox">
                                <img src="/img/sponsors/Metrolinx_Black_EN.png" className="logo img-responsive" alt="Metrolinx" />
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <h3 className="col-md-12">Supporters</h3>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/AGR_4color_stacked_EN.png" className="logo img-responsive" alt="Active Green+Ross®" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/BNYM_4color_EN.png" className="logo img-responsive" alt="BNY Mellon Wealth Management" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/CENTURION_4color_EN.png" className="logo img-responsive" alt="Centurion Asset Management, Inc." />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/CC Logo Shipped.png" className="logo img-responsive" alt="Coutts Crane | Barristers and Solicitors" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/GAC_colour_en.gif" className="logo img-responsive" alt="Global Affairs Canada" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/GLB_Circle_clean.png" className="logo img-responsive" alt="Great Lakes Brewery" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/BM_4color_HOR_Screen_ENG.png" className="logo img-responsive" alt="Homido" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/KPMG_4color_ENG.png" className="logo img-responsive" alt="KPMG" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/LPK_LOGO_SCREEN_LRG.jpg" className="logo img-responsive" alt="Lexus on the Park" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/SCAW-Mac.png" className="logo img-responsive" alt="Macgregors Meats & Seafood Ltd." />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/Mackie_4color_EN.png" className="logo img-responsive" alt="Mackie Research Capital Corporation" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/Megalo_logo_dark.png" className="logo img-responsive" alt="Magalomaniac Wines" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/MyPostcard.png" className="logo img-responsive" alt="MyPostcard" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/PIC_4color_EN.png" className="logo img-responsive" alt="Plan International Canada" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/logo-resolved-smartsimple-01.png" className="logo img-responsive" alt="Re-Solved & SmartSimple Software" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/local-lager-logo.png" className="logo img-responsive" alt="Rotary Lager Beer" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/soles4souls_circle 4_tag.png" className="logo img-responsive" alt="Soles4Souls" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/TR_logo_for_Rotary.jpg" className="logo img-responsive" alt="Tippet Richardson" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/Ultramatic logo- no tag.png" className="logo img-responsive" alt="Ultramatic" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-lg-3">
                            <div className="logobox">
                                <img src="/img/sponsors/UZima_4color_ENG.png" className="logo img-responsive" alt="UZima Filters" />
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
                                    <input type="text" className="form-control" name="_subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validation"></div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                                <input type="hidden" name="reason" value="mvkwvlax" />
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
