import React, { Component } from 'react';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';

class Host extends Component {
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
                </BodyClassName>
            </DocumentMeta>
        );
    }
}

export default Host;
