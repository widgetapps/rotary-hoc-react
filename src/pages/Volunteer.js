import React, { Component } from 'react';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';
import Faq from './Faq';

class Volunteer extends Component {
    render() {
        const meta = {
            title: 'Volunteer | Rotary International Convention Toronto 2018 (June 23-27)',
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
                <BodyClassName className="page-about"><div id="content">
                    <div className="container" id="about">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-header">
                                    <h1>
                                        Volunteer
                                        <small>There are many opportunities to volunteer with the Host Organizing Committee.</small>
                                    </h1>

                                    <div className="row">
                                        <div className="col-sm-12">

                                            <p>In order to volunteer for the 2018 Rotary International Convention in Toronto, you must first register.
                                                We are using VROOM! to manage all of the convention locations, shifts & volunteers. Once your account has
                                                been created, you will see all of the available shifts that you can volunteer for. Each shift has a range
                                                of required volunteers and once a shift is full, you will no longer be able to sign-up for that shift.
                                                So be sure to register early to get the shifts you want!</p>

                                            <p><em>WE ARE NOW ACCEPTING VOLUNTEERS FOR THE 2018 CONVENTION IN TORONTO.</em></p>

                                            <a role="button" className="btn btn-primary btn-lg" href="https://app.vroomhq.com/s/rotary-2018" target="new">Register to Volunteer <span className="glyphicon glyphicon-new-window" aria-hidden="true"></span></a>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            &nbsp;
                                        </div>
                                    </div>

                                    <Faq type="volunteer" title="Volunteer FAQ" description="These are some of the most frequent questions we get asked about volunteering." />

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

export default Volunteer;
