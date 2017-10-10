import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import DataEvent from '../data/DataEvent';

class Event extends Component {
    render() {
        let event = DataEvent.get(
            parseInt(this.props.number, 10)
        );
        if (!event) {
            event =  DataEvent.get(1);
        }

        const meta = {
            title: 'Events - ' + event.name + ' | Rotary International Convention Toronto 2018 (June 23-27)',
            description: event.description,
            canonical: '/events/' + event.id,
            meta: {
                name: {
                    keywords: 'rotary, convention, 2018, toronto, hoc, host organizing committee, host, organizing, committee, events',
                    'twitter:card': 'summary',
                    'twitter:title': 'Events - ' + event.name + ' | Rotary International Convention Toronto 2018 (June 23-27)',
                    'twitter:description': event.description
                },
                property: {
                    'og:title': 'Events - ' + event.name + ' | Rotary International Convention Toronto 2018 (June 23-27)',
                    'og:type': 'website',
                    'og:url': 'http://rotary2018.org/events/' + event.id,
                    'og:description': event.description
                }
            }
        };

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
