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
                .get("https://data.fixer.io/api/latest?base=CAD&access_key=47a1154102e0c0c9721a647502e02472")
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
                    'twitter:site': '@RotaryTO2018',
                    'twitter:title': 'Events - ' + this.state.event.name + ' | Rotary International Convention Toronto 2018 (June 23-27)',
                    'twitter:description': this.state.event.description,
                    'twitter:image': this.state.event.image.page
                },
                property: {
                    'og:title': 'Events - ' + this.state.event.name + ' | Rotary International Convention Toronto 2018 (June 23-27)',
                    'og:type': 'website',
                    'og:image': this.state.event.image.page,
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

                        {this.state.event.image !== 'N/A' ? (
                            <img className="img-responsive" src={this.state.event.image.page} />
                        ) : (
                            <br />
                        )}
                        <h4>Event Description</h4>
                        <p>{this.state.event.description}</p>

                        {this.state.event.videolink !== 'N/A' ? (
                            <a href={this.state.event.videolink} className="btn btn-sm btn-more i-right" target="video">View Event Video <i className="fa fa-film"></i></a>
                        ) : (
                            <br />
                        )}

                        <h4>How to get there</h4>
                        <p>{this.state.event.gettingthere} <a href={this.state.event.venue.map} target="map"><i className="fa fa-map" aria-hidden="true"></i> MAP</a></p>

                        <h4>Event Details</h4>
                        <p>Date: {moment(this.state.event.starttime).format("ddd, MMM Do, YYYY")}</p>
                        <p>Time: {moment(this.state.event.starttime).format("h:mmA")} to {moment(this.state.event.endtime).format("hA")}</p>

                        {this.state.event.supportdoc !== 'N/A' ? (
                            <div><a href={this.state.event.supportdoc.link} className="btn btn-sm btn-more i-right" target="video">{this.state.event.supportdoc.anchor} <i className="fa fa-file-pdf-o"></i></a><br />&nbsp;<br /></div>
                        ) : (
                            <br />
                        )}

                        <p><em className="lead">Price: ${this.state.event.price} CAD</em> (approximately ${Math.round(usd)} USD*) including all fees and taxes.</p>
                        <small>* US currency based on the current exchange rate of {this.state.exchange * 100}%.<br/><br/></small>

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
                            {this.state.event.image !== 'N/A' ? (
                                <div className="col-md-4">
                                    <img className="img-responsive img-rounded" src={this.state.event.image.venue} />
                                </div>
                            ) : (
                                <div className="col-md-1"></div>
                            )}
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

                        {this.state.event.image !== 'N/A' ? (
                            <img className="img-responsive" src={this.state.event.image.page} />
                        ) : (
                            <br />
                        )}
                        <h4>Event Description</h4>
                        <p>{this.state.event.description}</p>

                        {this.state.event.videolink !== 'N/A' ? (
                            <a href={this.state.event.videolink} className="btn btn-sm btn-more i-right" target="video">View Event Video <i className="fa fa-film"></i></a>
                        ) : (
                            <br />
                        )}

                        <h4>How to get there</h4>
                        <p>{this.state.event.gettingthere}</p>

                        <h4>Event Details</h4>
                        <p>Date: {moment(this.state.event.starttime).format("ddd, MMM Do, YYYY")}</p>
                        <p>Time: {moment(this.state.event.starttime).format("hA")} to {moment(this.state.event.endtime).format("hA")}</p>

                        {this.state.event.supportdoc !== 'N/A' ? (
                            <div><a href={this.state.event.supportdoc.link} className="btn btn-sm btn-more i-right" target="video">{this.state.event.supportdoc.anchor} <i className="fa fa-file-pdf-o"></i></a><br />&nbsp;<br /></div>
                        ) : (
                            <br />
                        )}

                        <p><em className="lead">Price: ${this.state.event.price} CAD</em> (approximately ${Math.round(usd)} USD*) including all fees and taxes.</p>
                        <small>* US currency based on the current exchange rate of {this.state.exchange * 100}%.<br/><br/></small>

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
