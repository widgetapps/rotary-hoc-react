import React, { Component } from 'react';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';
import Faq from './Faq';

class Host extends Component {
    render() {
        const meta = {
            title: 'Host Hospitality | Rotary International Convention Toronto 2018 (June 23-27)',
            description: 'Find out how you can host visiting Rotarians for Host Hospitality night.',
            canonical: 'http://rotary2018.org/host',
            meta: {
                name: {
                    keywords: 'rotary, convention, 2018, toronto, hoc, host organizing committee, host, organizing, committee, host hospitality, hospitality',
                    'twitter:card': 'summary',
                    'twitter:site': '@RotaryTO2018',
                    'twitter:title': 'Host Hospitality | Rotary International Convention Toronto 2018 (June 23-27)',
                    'twitter:description': 'Find out how you can host visiting Rotarians for Host Hospitality night.',
                    'twitter:image': '/img/c18toronto_logo.png'
                },
                property: {
                    'og:title': 'Host Hospitality | Rotary International Convention Toronto 2018 (June 23-27)',
                    'og:type': 'website',
                    'og:image': '/img/c18toronto_logo.png',
                    'og:url': 'http://rotary2018.org/host',
                    'og:description': 'Find out how you can host visiting Rotarians for Host Hospitality night.'
                }
            }
        };

        return (
            <DocumentMeta {...meta} extend>
                <Header />
                <BodyClassName className="page-about"><div id="content">
                    <div className="container" id="about">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-header">
                                    <h1>
                                        Host Hospitality
                                        <small>Your chance to host Rotarians from abroad.</small>
                                    </h1>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h2>Interested in hosting visiting Rotarians for Home Hospitality?</h2>

                                            <p>On Monday, June 25, 2018, we'll be hosting 5,000 visiting Rotarians from around the world. We're looking
                                                for Rotarians and Rotary clubs to host our guests visiting Toronto. You can organize something as simple
                                                as a BBQ in your back yard for 4 or 6 guests, or something larger hosted at a venue of your choice.</p>

                                            <h3>How Home Hospitality Works</h3>

                                            <p>Delegates get randomly assigned to one of the host events we organize. As a delegate, you
                                                never know who, what or where you'll end up, but it's always a great time.</p>

                                            <p>As hosts, delegates will be assigned to your event. You are expected to serve a meal and
                                                your event must be no more than 1 hour away from the Metro Toronto Convention Centre.
                                                See the FAQ below for more details.</p>

                                            <a role="button" class="btn btn-primary btn-lg" href="https://docs.google.com/a/rotary7070.ca/forms/d/e/1FAIpQLSeMeOB7oSrj55pMvePRTlVuOjvFd0wiF7GNxGmzFgI3rSep9Q/viewform" target="new">Sign-Up to Host an Event <span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            &nbsp;
                                        </div>
                                    </div>

                                    <Faq type="host" title="Home Hospitality FAQ" description="These are some of the most frequent questions we get asked about home hospitality." />

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

export default Host;
