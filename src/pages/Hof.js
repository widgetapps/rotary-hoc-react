import React, { Component } from 'react';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';

class Hof extends Component {
    render() {
        const meta = {
            title: 'House of Friendship | Rotary International Convention Toronto 2018 (June 23-27)',
            description: 'I am a description, and I can create multiple tags',
            canonical: 'http://rotary2018.org/hof',
            meta: {
                charset: 'utf-8',
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
                                            House of Friendship
                                            <small>Explore the many exhibitors &amp; entertainers of the convention</small>
                                        </h1>
                                        <p>This is where the Rotary world comes together and where ideas, best practices, and
                                            project successes are proudly shared. Browse booths showcasing Rotary projects,
                                            Rotary Fellowships, and Rotarian Action Groups. Shop for Rotary-licensed merchandise,
                                            including pins, shirts, and banners. Meet with staff in the Resource Center about
                                            Rotary's programs and services.</p>
                                        <p>If you are interested in having a booth in the 2018 House of Friendship, please email us at
                                            <a href="mailto:exhibitors@rotary2018.org">exhibitors@rotary2018.org</a>.</p>
                                        <div class="services block block-bg-gradient block-border-bottom">
                                            <div class="row">
                                                <div class="col-md-4 text-center">
                                                    <span class="fa-stack fa-5x">
                                                      <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                                      <i class="fa fa-tag fa-stack-1x fa-inverse"></i>
                                                    </span>
                                                    <h4 class="text-weight-strong">
                                                        Exhibitors
                                                    </h4>
                                                    <p>Explore the many exhibitors and Rotary booths.</p>
                                                </div>
                                                <div class="col-md-4 text-center">
                                                    <span class="fa-stack fa-5x">
                                                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                                        <i class="fa fa-music fa-stack-1x fa-inverse"></i>
                                                    </span>
                                                    <h4 class="text-weight-strong">
                                                        Entertainment
                                                    </h4>
                                                    <p>Enjoy the full schedule of local entertainment.</p>
                                                </div>
                                                <div class="col-md-4 text-center">
                                                    <span class="fa-stack fa-5x">
                                                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                                        <i class="fa fa-users fa-stack-1x fa-inverse"></i>
                                                    </span>
                                                    <h4 class="text-weight-strong">
                                                        Fellowship
                                                    </h4>
                                                    <p>Connect with fellow Rotarians.</p>
                                                </div>
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

export default Hof;
