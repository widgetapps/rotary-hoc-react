import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';
import DataNews from '../data/DataNews';
import DataEvents from '../data/DataEvent';
import moment from 'moment';

class Home extends Component {
    render() {
        const meta = {
            title: 'Rotary International Convention Toronto 2018 (June 23-27)',
            description: 'There’s a world of opportunity waiting for you at the Toronto convention.',
            canonical: '/',
            meta: {
                name: {
                    keywords: 'rotary, convention, 2018, toronto, hoc, host organizing committee, host, organizing, committee',
                    'twitter:card': 'summary',
                    'twitter:site': '@RotaryTO2018',
                    'twitter:title': 'Rotary International Convention Toronto 2018 (June 23-27)',
                    'twitter:description': 'There’s a world of opportunity waiting for you at the Toronto convention.',
                    'twitter:image': '/img/c18toronto_logo.png'
                },
                property: {
                    'og:title': 'Rotary International Convention Toronto 2018 (June 23-27)',
                    'og:type': 'website',
                    'og:image': '/img/c18toronto_logo.png',
                    'og:url': 'http://rotary2018.org/',
                    'og:description': 'There’s a world of opportunity waiting for you at the Toronto convention.'
                }
            }
        };

        const featureArticle = DataNews.get(DataNews.articles.length);

        return (
            <DocumentMeta {...meta} extend>
                <Header>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-push-6 item-caption">
                                <h2 className="h1 text-weight-light">
                                    Welcome to <span className="text-primary"><strong>TORONTO</strong></span>
                                </h2>
                                <h4>
                                    There's a world of opportunity waiting for you at the Rotary convention.
                                </h4>
                                <p>In partnership with Rotary International, the Host Organizing Committee invites you
                                    to join us in Toronto, Canada June 23-27 2018. With the spirit of true Canadian
                                    hospitality, we wish to welcome Rotarians from around the world to experience
                                    everything Toronto and the Golden Horseshoe has to offer.</p>
                                <a href="http://www.riconvention.org/en/toronto" className="btn btn-more btn-lg i-right">Register Now <i className="fa fa-plus"></i></a>
                            </div>
                            <div className="col-md-6 col-md-pull-6 hidden-xs">
                                <img src="../img/c18toronto_logo.png" alt="Slide 1" className="center-block img-responsive" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        &nbsp;
                    </div>
                </Header>
                <BodyClassName className="page-index has-hero">
                    <div id="content">
                        <div className="mission text-center block block-pd-sm block-bg-noise">
                            <div className="container">
                                <h2 className="text-shadow-white">
                                    Find inspiration on every block, in every street, and around every corner in Toronto.
                                    See what we have planned for convention visitors.
                                </h2>
                            </div>
                        </div>
                        <div className="block block-border-bottom-grey">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 className="block-title">
                                            Host Ticketed Events
                                        </h2>
                                        <p>Toronto is known as a city of neighbourhoods, where every culture has a home.</p>
                                    </div>
                                </div>
                                <div className="row is-flex">
                                    {
                                        DataEvents.all().filter(g => g.type === 'hoc').map(e => (

                                            <div className="col-md-4 col-lg-3">
                                                <div className="box">
                                                    <Link to={`/events/hoc/${e.id}`} ><img className="img-responsive img-rounded" border="0" src={e.image.listing} /></Link>
                                                    <h3>{e.name}</h3>
                                                    <p>{e.byline}</p>
                                                    <p>Date: {moment(e.starttime).format("ddd, MMM Do, YYYY")}</p>
                                                    <p>Time: {moment(e.starttime).format("hA")} to {moment(e.endtime).format("hA")}</p>
                                                    <Link to={`/events/hoc/${e.id}`} className="btn btn-primary anchor">Event Details</Link>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="block block-border-bottom-grey">
                            <div className="container">
                                <h2 className="block-title">
                                    Featured News
                                </h2>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>{featureArticle.title}</h4>
                                        {featureArticle.content.map(a => (
                                            <p>{a}</p>
                                        ))}

                                        <Link to="/news" className="btn btn-more i-right">Read More News <i className="fa fa-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="services block block-bg-gradient block-border-bottom">
                            <div className="container">
                                <h2 className="block-title">
                                    About Toronto
                                </h2>
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                        <span className="fa-stack fa-5x">
                                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                          <i className="fa fa-building fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <h4 className="text-weight-strong">
                                            This Is Toronto
                                        </h4>
                                        <p>Toronto is Canada's largest city, the fourth largest in North America, and home to a diverse
                                            population of about 2.8 million people. It's a global centre for business, finance, arts and
                                            culture and is consistently ranked one of the world's most livable cities.</p>
                                        <p>
                                            <a href="http://www.seetorontonow.com/explore-toronto/this-is-toronto/" target="remote" class="btn btn-more i-right">Learn More <i className="fa fa-link"></i></a>
                                        </p>
                                    </div>
                                    <div className="col-md-4 text-center">
                                      <span className="fa-stack fa-5x">
                                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                          <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                                      </span>
                                        <h4 className="text-weight-strong">
                                            Explore Toronto Neighbourhoods
                                        </h4>
                                        <p>The strength and vitality of the many neighbourhoods that make up Toronto has earned the city its
                                            unofficial nickname of "the city of neighbourhoods." There are 140 neighbourhoods officially
                                            recognized by the City of Toronto and upwards of 240 official and unofficial neighbourhoods
                                            within the city's boundaries</p>
                                        <p>
                                            <a href="http://www.seetorontonow.com/explore-toronto/neighbourhoods/" target="remote" class="btn btn-more i-right">Learn More <i className="fa fa-link"></i></a>
                                        </p>
                                    </div>
                                    <div className="col-md-4 text-center">
                                      <span className="fa-stack fa-5x">
                                      <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                      <i className="fa fa-bus fa-stack-1x fa-inverse"></i>
                                      </span>
                                        <h4 class="text-weight-strong">
                                            Day Trips, Tours &amp; Specialty Events
                                        </h4>
                                        <p>Canadian Tours International offers day trips, customized day and multi day excursions Canada
                                            coast to coast, specialty event planning and coordination as well as special activity programs.</p>

                                        <p>For further information please contact Ann Corbitt at <a href="mailto:annc@ctidmc.com">annc@ctidmc.com</a> or
                                            at <a href="tel:+14165265859">+1&nbsp;416-526-5859</a>.</p>
                                        <p>
                                            <a href="http://www.regonline.com/torontotourprogram" target="remote" class="btn btn-more i-right">Learn More <i className="fa fa-link"></i></a>
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </BodyClassName>
            </DocumentMeta>
        );
    }
}

export default Home;
