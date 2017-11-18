import React, { Component } from 'react';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';

class ClubEvent extends Component {
    render() {
        const meta = {
            title: 'Post Club Event | Rotary International Convention Toronto 2018 (June 23-27)',
            description: 'I am a description, and I can create multiple tags',
            canonical: 'http://rotary2018.org/clubevent',
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
                                        Post a Club Event
                                        <small>Add your club event to the event listing.</small>
                                    </h1>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p>Details will be posted soon.</p>
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe2RQ05Kbf_Vk0j2qU2zmTGR2btxPD0R3BHEBrxbgehGdNlSg/viewform">Form</a>
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

export default ClubEvent;
