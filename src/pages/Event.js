import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import DataEvent from '../data/DataEvent';

class Event extends Component {
    render() {
        const meta = {
            title: 'Event Name | Rotary International Convention Toronto 2018 (June 23-27)',
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


        var event = DataEvent.get(
            parseInt(this.props.number, 10)
        );
        if (!event) {
            event =  DataEvent.get(1);
        }

        return (
            <DocumentMeta {...meta} extend>
                <div class="block block-border-bottom-grey block-pd-sm">
                    <h3 class="block-title">{event.name}</h3>
                    {event.description}
                </div>
            </DocumentMeta>
        );
    }
}

export default Event;
