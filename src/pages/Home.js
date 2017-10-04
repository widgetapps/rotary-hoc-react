import React, { Component } from 'react';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';

class Home extends Component {
    render() {
        const meta = {
            title: 'News | Rotary International Convention Toronto 2018 (June 23-27)',
            description: 'I am a description, and I can create multiple tags',
            canonical: 'http://rotary2018.org/',
            meta: {
                name: {
                    keywords: 'react,meta,document,html,tags',
                    'twitter:card': '',
                    'twitter:site': '',
                    'twitter:title': '',
                    'twitter:description': '',
                    'twitter:image': ''
                },
                property: {
                    'og:title': 'OG Title',
                    'og:image': 'OG',
                    'og:url': 'OG',
                    'og:site_name': 'OG',
                    'og:description': 'OG'
                }
            }
        };

        return (
            <DocumentMeta {...meta} extend>
                <Header>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-md-push-6 item-caption">
                                <h2 class="h1 text-weight-light">
                                    Welcome to <span class="text-primary"><strong>TORONTO</strong></span>
                                </h2>
                                <h4>
                                    There's a world of opportunity waiting for you at the Rotary convention.
                                </h4>
                                <p>In partnership with Rotary International, the Host Organizing Committee invites you
                                    to join us in Toronto, Canada June 23-27 2018. With the spirit of true Canadian
                                    hospitality, we wish to welcome Rotarians from around the world to experience
                                    everything Toronto and the Golden Horseshoe has to offer.</p>
                                <a href="http://www.riconvention.org/en/toronto" class="btn btn-more btn-lg i-right">Register Now <i class="fa fa-plus"></i></a>
                            </div>
                            <div class="col-md-6 col-md-pull-6 hidden-xs">
                                <img src="img/c18toronto_logo.png" alt="Slide 1" class="center-block img-responsive" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        &nbsp;
                    </div>
                </Header>
                <BodyClassName className="page-index has-hero">
                    <div id="content">
                        <div class="mission text-center block block-pd-sm block-bg-noise">
                            <div class="container">
                                <h2 class="text-shadow-white">
                                    Find inspiration on every block, in every street, and around every corner in Toronto.
                                    See what we have planned for convention visitors.
                                </h2>
                            </div>
                        </div>
                        <div class="showcase block block-border-bottom-grey">
                            <div class="container">
                                <h2 class="block-title">
                                    Venue Showcase
                                </h2>
                                <p>Toronto is known as a city of neighbourhoods, where every culture has a home. Here
                                    are a few of the venues you'll get to explore at the Toronto 2018 Convention.</p>
                                <div class="item-carousel" data-toggle="owlcarousel" data-owlcarousel-settings='{"items":4, "pagination":false, "navigation":true, "itemsScaleUp":true}'>
                                    <div class="item">
                                        <a href="venue-mtcc.html" class="overlay-wrapper">
                                            <img src="img/venues/mtcc.jpg" alt="Metro Toronto Convention Centre image" class="img-responsive underlay" />
                                            <span class="overlay">
                                                <span class="overlay-content">
                                                    <span class="h4">Metro Toronto Convention Centre</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div class="item-details bg-noise">
                                            <h4 class="item-title">
                                                <a href="venue-mtcc.html">MTCC</a>
                                            </h4>
                                            <a href="venue-mtcc.html" class="btn btn-more"><i class="fa fa-plus"></i>Read more</a>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <a href="venue-acc.html" class="overlay-wrapper">
                                            <img src="img/venues/acc.jpg" alt="Air Canada Centre image" class="img-responsive underlay" />
                                            <span class="overlay">
                                                <span class="overlay-content">
                                                    <span class="h4">Air Canada Centre</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div class="item-details bg-noise">
                                            <h4 class="item-title">
                                                <a href="venue-acc.html">Air Canada Centre</a>
                                            </h4>
                                            <a href="venue-acc.html" class="btn btn-more"><i class="fa fa-plus"></i>Read more</a>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <a href="venue-casa_loma.html" class="overlay-wrapper">
                                            <img src="img/venues/casa_loma.jpg" alt="Project 3 image" class="img-responsive underlay" />
                                            <span class="overlay">
                                                <span class="overlay-content">
                                                    <span class="h4">Casa Loma</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div class="item-details bg-noise">
                                            <h4 class="item-title">
                                                <a href="venue-casa_loma.html">Casa Loma</a>
                                            </h4>
                                            <a href="venue-casa_loma.html" class="btn btn-more"><i class="fa fa-plus"></i>Read more</a>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <a href="venue-distillery.html" class="overlay-wrapper">
                                            <img src="img/venues/distillery_district.jpg" alt="Project 4 image" class="img-responsive underlay" />
                                            <span class="overlay">
                                                <span class="overlay-content">
                                                    <span class="h4">Distillery District</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div class="item-details bg-noise">
                                            <h4 class="item-title">
                                                <a href="venue-distillery.html">Distillery District</a>
                                            </h4>
                                            <a href="venue-distillery.html" class="btn btn-more"><i class="fa fa-plus"></i>Read more</a>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <a href="venue-direct_energy.html" class="overlay-wrapper">
                                            <img src="img/venues/direct_energy_centre.jpg" alt="Project 5 image" class="img-responsive underlay" />
                                            <span class="overlay">
                                                <span class="overlay-content">
                                                    <span class="h4">Direct Energy Centre</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div class="item-details bg-noise">
                                            <h4 class="item-title">
                                                <a href="venue-direct_energy.html">Direct Energy Centre</a>
                                            </h4>
                                            <a href="venue-direct_energy.html" class="btn btn-more"><i class="fa fa-plus"></i>Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="services block block-bg-gradient block-border-bottom">
                            <div class="container">
                                <h2 class="block-title">
                                    About Toronto
                                </h2>
                                <div class="row">
                                    <div class="col-md-4 text-center">
                                        <span class="fa-stack fa-5x">
                                          <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                          <i class="fa fa-building fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <h4 class="text-weight-strong">
                                            This Is Toronto
                                        </h4>
                                        <p>Toronto is Canada's largest city, the fourth largest in North America, and home to a diverse
                                            population of about 2.8 million people. It's a global centre for business, finance, arts and
                                            culture and is consistently ranked one of the world's most livable cities.</p>
                                        <p>
                                            <a href="http://www.seetorontonow.com/explore-toronto/this-is-toronto/" target="remote" class="btn btn-more i-right">Learn More <i class="fa fa-link"></i></a>
                                        </p>
                                    </div>
                                    <div class="col-md-4 text-center">
                                      <span class="fa-stack fa-5x">
                                          <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                          <i class="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                                      </span>
                                        <h4 class="text-weight-strong">
                                            Explore Toronto Neighbourhoods
                                        </h4>
                                        <p>The strength and vitality of the many neighbourhoods that make up Toronto has earned the city its
                                            unofficial nickname of "the city of neighbourhoods." There are 140 neighbourhoods officially
                                            recognized by the City of Toronto and upwards of 240 official and unofficial neighbourhoods
                                            within the city's boundaries</p>
                                        <p>
                                            <a href="http://www.seetorontonow.com/explore-toronto/neighbourhoods/" target="remote" class="btn btn-more i-right">Learn More <i class="fa fa-link"></i></a>
                                        </p>
                                    </div>
                                    <div class="col-md-4 text-center">
                                      <span class="fa-stack fa-5x">
                                      <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                      <i class="fa fa-bus fa-stack-1x fa-inverse"></i>
                                      </span>
                                        <h4 class="text-weight-strong">
                                            Day Trips, Tours &amp; Specialty Events
                                        </h4>
                                        <p>Canadian Tours International offers day trips, customized day and multi day excursions Canada
                                            coast to coast, specialty event planning and coordination as well as special activity programs.</p>

                                        <p>For further information please contact Ann Corbitt at <a href="mailto:annc@ctidmc.com">annc@ctidmc.com</a>
                                            or at <a href="tel:+14165265859">+1&nbsp;416-526-5859</a>.</p>
                                        <p>
                                            <a href="http://www.regonline.com/torontotourprogram" target="remote" class="btn btn-more i-right">Learn More <i class="fa fa-link"></i></a>
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
