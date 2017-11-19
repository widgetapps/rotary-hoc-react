import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import DataEvent from '../data/DataEvent';
import moment from "moment/moment";
import axios from 'axios';
import Faq from './Faq';

class Event extends Component {
    constructor(props) {
        super(props);
        let event = DataEvent.get(
            parseInt(this.props.number, 10)
        );
        if (!event) {
            event =  DataEvent.get(1);
        }
        this.state = {exchange: 0, event: event};
    }

    componentWillReceiveProps(nextProps) {

        console.log(nextProps.number);
        let event = DataEvent.get(
            parseInt(nextProps.number, 10)
        );
        if (!event) {
            event =  DataEvent.get(1);
        }
        this.setState((prevState, props) => ({
            event: event
        }));

    }

    componentDidMount () {
        window.scrollTo(0, 0);
        let _this = this;

        this.serverRequest =
            axios
                .get("https://api.fixer.io/latest?base=CAD")
                .then(function(result) {

                    _this.setState({
                        exchange: result.data.rates.USD,
                        exchangedate: result.data.date
                    });
                })
    }

    render() {

        const meta = {
            title: 'Events - ' + this.state.event.name + ' | Rotary International Convention Toronto 2018 (June 23-27)',
            description: this.state.event.description,
            canonical: '/events/' + this.state.event.id,
            meta: {
                name: {
                    keywords: 'rotary, convention, 2018, toronto, hoc, host organizing committee, host, organizing, committee, events',
                    'twitter:card': 'summary',
                    'twitter:title': 'Events - ' + this.state.event.name + ' | Rotary International Convention Toronto 2018 (June 23-27)',
                    'twitter:description': this.state.event.description
                },
                property: {
                    'og:title': 'Events - ' + this.state.event.name + ' | Rotary International Convention Toronto 2018 (June 23-27)',
                    'og:type': 'website',
                    'og:url': 'http://rotary2018.org/events/' + this.state.event.id,
                    'og:description': this.state.event.description
                }
            }
        };
        let event = DataEvent.get(
            parseInt(this.props.number, 10)
        );
        if (!event) {
            event =  DataEvent.get(1);
        }

        let usd = this.state.event.price * this.state.exchange;
        let faqRef = 'event' + this.props.number;

        if (event.venue.name !== 'N/A') {

            return (
                <DocumentMeta {...meta} extend>
                    <div className="block block-border-bottom-grey block-pd-sm">
                        <h3 className="block-title">
                            {this.state.event.name}<br />
                            <small>{this.state.event.byline}</small>
                        </h3>
                        <img className="img-responsive" src={this.state.event.image.page} />
                        <h4>Event Description</h4>
                        <p>{this.state.event.description}</p>

                        <h4>How to get there</h4>
                        <p>{this.state.event.gettingthere} <a href={this.state.event.venue.map} target="map"><i className="fa fa-map" aria-hidden="true"></i> MAP</a></p>

                        <h4>Event Details</h4>
                        <p>Date: {moment(this.state.event.starttime).format("ddd, MMM Do, YYYY")}</p>
                        <p>Time: {moment(this.state.event.starttime).format("hA")} to {moment(this.state.event.endtime).format("hA")}</p>
                        <p><em className="lead">Price: ${this.state.event.price} CAD</em> (approximately ${usd.toFixed(2)} USD*) including all fees and taxes.</p>
                        <small>* US currency based on the exchange rate of {this.state.exchange} in effect on {moment(this.state.exchangedate).format("MMM Do, YYYY")}, and customary credit card exchange fees<br/><br/></small>

                        <a href={this.state.event.eventlink} className="btn btn-lg btn-more i-right">Buy Now <i className="fa fa-plus"></i></a>

                        <div className="row">
                            <div className="col-md-12">
                                &nbsp;
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <h4>Venue Details</h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-responsive img-rounded" src={this.state.event.image.venue} />
                            </div>
                            <div className="col-md-8">
                                <h5>{this.state.event.venue.name}</h5>
                                <p>{this.state.event.venue.details}</p>
                                <p>Address: {this.state.event.venue.address} <a href={this.state.event.venue.map} target="map"><i className="fa fa-map" aria-hidden="true"></i> MAP</a></p>
                            </div>
                        </div>

                        <Faq type={faqRef} title="Event FAQ" description="" />

                    </div>
                </DocumentMeta>
            );
        } else {
            return (
                <DocumentMeta {...meta} extend>
                    <div className="block block-border-bottom-grey block-pd-sm">
                        <h3 className="block-title">
                            {this.state.event.name}<br />
                            <small>{this.state.event.byline}</small>
                        </h3>
                        <img className="img-responsive" src={this.state.event.image.page} />
                        <h4>Event Description</h4>
                        <p>{this.state.event.description}</p>

                        <h4>How to get there</h4>
                        <p>{this.state.event.gettingthere} <a href={this.state.event.venue.map} target="map"><i className="fa fa-map" aria-hidden="true"></i> MAP</a></p>

                        <h4>Event Details</h4>
                        <p>Date: {moment(this.state.event.starttime).format("ddd, MMM Do, YYYY")}</p>
                        <p>Time: {moment(this.state.event.starttime).format("hA")} to {moment(this.state.event.endtime).format("hA")}</p>
                        <p><em className="lead">Price: ${this.state.event.price} CAD</em> (approximately ${usd.toFixed(2)} USD*) including all fees and taxes.</p>
                        <small>* US currency based on the exchange rate of {this.state.exchange} in effect on {moment(this.state.exchangedate).format("MMM Do, YYYY")}, and customary credit card exchange fees<br/><br/></small>

                        <a href={this.state.event.eventlink} className="btn btn-lg btn-more i-right">Buy Now <i className="fa fa-plus"></i></a>

                        <div className="row">
                            <div className="col-md-12">
                                &nbsp;
                            </div>
                        </div>

                        <Faq type={faqRef} title="Event FAQ" description="" />

                    </div>
                </DocumentMeta>
            );
        }
    }
}

export default Event;
