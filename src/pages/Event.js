import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import DataEvent from '../data/DataEvent';
import moment from "moment/moment";
import axios from 'axios';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {exchange: 0, usd: 0};
    }

    componentDidMount () {
        window.scrollTo(0, 0);
        let _this = this;
        this.serverRequest =
            axios
                .get("https://api.fixer.io/latest?base=CAD")
                .then(function(result) {
                    _this.setState({
                        exchange: result.data.rates.USD
                    });
                })
    }

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

        if (event.venue.name !== 'N/A') {
            return (
                <DocumentMeta {...meta} extend>
                    <div className="block block-border-bottom-grey block-pd-sm">
                        <h3 className="block-title">
                            {event.name}<br />
                            <small>{event.byline}</small>
                        </h3>
                        <img className="img-responsive" src={event.image.page} />
                        <h4>Event Description</h4>
                        <p>{event.description}</p>

                        <h4>How to get there</h4>
                        <p>{event.gettingthere}</p>

                        <h4>Event Details</h4>
                        <p>Date: {moment(event.starttime).format("ddd, MMM Do, YYYY")}</p>
                        <p>Time: {moment(event.starttime).format("hA")} to {moment(event.endtime).format("hA")}</p>
                        <p>Price: ${event.price} {event.pricedetails}</p>
                        <p>* US currency based on the exchange rate in effect in November, 2017, and customary credit card exchange fees</p>
                        <p>Exchange Rate: {this.state.exchange}</p>

                        <a href={event.eventlink} className="btn btn-lg btn-more i-right">Buy Now <i className="fa fa-plus"></i></a>

                        <h4>Venue Details</h4>

                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-responsive img-rounded" src={event.image.listing} />
                            </div>
                            <div className="col-md-8">
                                <h5>{event.venue.name}</h5>
                                <p>{event.venue.details}</p>
                                <p>Address: {event.venue.address} <a href={event.venue.map} target="map"><i className="fa fa-map" aria-hidden="true"></i> MAP</a></p>
                            </div>
                        </div>

                    </div>
                </DocumentMeta>
            );
        } else {
            return (
                <DocumentMeta {...meta} extend>
                    <div className="block block-border-bottom-grey block-pd-sm">
                        <h3 className="block-title">
                            {event.name}<br />
                            <small>{event.byline}</small>
                        </h3>
                        <img className="img-responsive" src={event.image.page} />
                        <h4>Event Description</h4>
                        <p>{event.description}</p>

                        <h4>How to get there</h4>
                        <p>{event.gettingthere}</p>

                        <h4>Event Details</h4>
                        <p>Date: {moment(event.starttime).format("ddd, MMM Do, YYYY")}</p>
                        <p>Time: {moment(event.starttime).format("hA")} to {moment(event.endtime).format("hA")}</p>
                        <p>Price: ${event.price} {event.pricedetails}</p>
                        <p>* US currency based on the exchange rate in effect in November, 2017, and customary credit card exchange fees</p>

                        <a href={event.eventlink} className="btn btn-lg btn-more i-right">Buy Now <i className="fa fa-plus"></i></a>

                    </div>
                </DocumentMeta>
            );
        }
    }
}

export default Event;
