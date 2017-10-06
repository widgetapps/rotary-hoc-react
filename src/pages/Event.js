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


        let event = DataEvent.get(
            parseInt(this.props.number, 10)
        );
        if (!event) {
            event =  DataEvent.get(1);
        }

        return (
            <DocumentMeta {...meta} extend>
                <div className="block block-border-bottom-grey block-pd-sm">
                    <h3 className="block-title">{event.name}</h3>
                    <p>{event.description}</p>

                    <h4>How to get there</h4>
                    <p>{event.gettingthere}</p>

                    <h4>Venue Details</h4>
                    <p>{event.venue.name}<br />
                        {event.venue.details}</p>
                    <p>{event.venue.address} <a href={event.venue.map}>MAP</a></p>

                    <a href={event.eventlink} className="btn btn-more i-right">Buy Now <i className="fa fa-plus"></i></a>
                </div>
            </DocumentMeta>
        );
    }
}

export default Event;
