import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';
import DataEvents from '../data/DataEvent';
import Event from './Event';
import DataNews from "../data/DataNews";
import moment from "moment/moment";

class Events extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render() {

        if (!this.props.match.params.type) {
            return <Redirect to='/events/hoc/2'/>;
        }

        const meta = {
            title: 'Events | Rotary International Convention Toronto 2018 (June 23-27)',
            description: 'I am a description, and I can create multiple tags',
            canonical: 'http://rotary2018.org/events',
            meta: {
                property: {
                    'og:url': 'http://rotary2018.org/events'
                }
            }
        };

        let number = 1;
        let type = 'hoc';
        switch (this.props.match.params.type) {
            case 'hoc':
                type = 'hoc';
                number = 2;
                break;
            case 'pre':
                type = 'pre';
                number = 100;
                break;
            case 'post':
                type = 'post';
                number = 200;
                break;
            default:
                number = parseInt(this.props.match.params.id, 10);
                if (!number || number < 1 || number > DataEvents.events.length) {
                    number = 2;
                }
        }

        if (this.props.match.params.id) {
            number = parseInt(this.props.match.params.id, 10);
            if (!number || number < 1 || number > DataEvents.events.length) {
                number = number;
            }
        }

        return (
            <DocumentMeta {...meta} extend>
                <Header />
                <BodyClassName className="page-about">
                    <div id="content">
                        <div className="container" id="about">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-header">
                                        <h1>
                                            Host Ticketed Events
                                            <small>Explore the many events of the convention</small>
                                        </h1>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-9 col-md-push-3">
                                            <Event number={number} />
                                        </div>
                                        <div className="col-md-3 col-md-pull-9 sidebar">
                                            <h5>Select Convention Event Timing:</h5>
                                            <div className="btn-group btn-group-justified" role="group" aria-label="Event types">
                                                <Link to="/events/pre/5" type="button" className={`btn btn-default ${type === 'pre'?'active':'notactive'}`}>Pre</Link>
                                                <Link to="/events/hoc/1" type="button" className={`btn btn-default ${type === 'hoc'?'active':'notactive'}`}>During</Link>
                                                <Link to="/events/post/12" type="button" className={`btn btn-default ${type === 'post'?'active':'notactive'}`}>Post</Link>
                                            </div>
                                            <h5>Available Events</h5>
                                            <ul className="nav nav-pills nav-stacked">
                                                {
                                                    DataEvents.all().filter(g => g.type === type).map(e => (
                                                        <li key={e.id} className={e.id === number?'active':'notactive'}>
                                                            <Link to={`/events/${type}/${e.id}`}>
                                                                {e.name}
                                                                <small>{moment(e.starttime).format("ddd, MMM Do, YYYY")} {moment(e.starttime).format("h:mmA")} to {moment(e.endtime).format("hA")}</small>
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
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

export default Events;
