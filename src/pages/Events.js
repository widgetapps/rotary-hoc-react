import React, { Component } from 'react';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';

class Events extends Component {
    render() {
        const meta = {
            title: 'Events | Rotary International Convention Toronto 2018 (June 23-27)',
            description: 'I am a description, and I can create multiple tags',
            canonical: 'http://rotary2018.org/events',
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
                <Header />
                <BodyClassName className="page-about">
                    <div id="content">
                        <div class="container" id="about">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="page-header">
                                        <h1>
                                            Convention Events
                                            <small>Explore the many events of the convention</small>
                                        </h1>
                                    </div>
                                    <div class="services block block-bg-gradient block-border-bottom">
                                        <div class="row">
                                            <div class="col-md-4 text-center">
                                                <span class="fa-stack fa-5x">
                                                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                                    <i class="fa fa-home fa-stack-1x fa-inverse"></i>
                                                </span>
                                                <h4 class="text-weight-strong">
                                                    House of Friendship
                                                </h4>
                                                <p>This is where the Rotary world comes together and where ideas, best practices, and
                                                    project successes are proudly shared. There will be events &amp; entertainment
                                                    scheduled in the House of Friendship for the duration of the convention.</p>
                                            </div>
                                            <div class="col-md-4 text-center">
                                              <span class="fa-stack fa-5x">
                                                  <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                                  <i class="fa fa-cutlery fa-stack-1x fa-inverse"></i>
                                              </span>
                                                <h4 class="text-weight-strong">
                                                    Host Hospitality
                                                </h4>
                                                <p>Host hospitality is an opportunity to meet fellow Rotarians from the around the world.
                                                    Dinners will be hosted on Monday night by local Rotarians in their homes or in venues in
                                                    the Greater Toronto Area. Be sure to sign up for home hospitality when you register for
                                                    the 2018 conference, it sells out fast!</p>
                                            </div>
                                            <div class="col-md-4 text-center">
                                                <span class="fa-stack fa-5x">
                                                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                                    <i class="fa fa-ticket fa-stack-1x fa-inverse"></i>
                                                </span>
                                                <h4 class="text-weight-strong">
                                                    Ticketed Events
                                                </h4>
                                                <p>Several ticketed events will be held at featured venues in the Toronto area. Events will
                                                    take place at various times during the convention and sales for ticketed events will be
                                                    announced when they become available. Be sure to check out the <a href="venue-mtcc.html">events venues</a> for a sneak
                                                    peek.</p>
                                            </div>
                                        </div>
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

export default Events;
