import React, { Component } from 'react';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';

class About extends Component {
    render() {
        const meta = {
            title: 'About | Rotary International Convention Toronto 2018 (June 23-27)',
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
                                        About the HOC
                                        <small>Toronto 2018 Host Organizing Committee</small>
                                    </h1>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p>HOC details will be posted soon.</p>
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

export default About;
