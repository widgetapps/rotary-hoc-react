import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';
import DataEvents from '../data/DataEvent';
import Event from './Event';
import DataNews from "../data/DataNews";

class Events extends Component {
    render() {

        if (!this.props.match.params.type) {
            return <Redirect to='/events/hoc/1'/>;
        }

        const meta = {
            title: 'Events | Rotary International Convention Toronto 2018 (June 23-27)',
            description: 'I am a description, and I can create multiple tags',
            canonical: 'http://rotary2018.org/events',
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

        let number = 1;
        let type = 'hoc';
        switch (this.props.match.params.type) {
            case 'hoc':
                type = 'hoc';
                number = 1;
                break;
            case 'pre':
                type = 'pre';
                number = 2;
                break;
            case 'post':
                type = 'post';
                number = 3;
                break;
            default:
                number = parseInt(this.props.match.params.id, 10);
                if (!number || number < 1 || number > DataEvents.events.length) {
                    number = 1;
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
                        <div class="container" id="about">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="page-header">
                                        <h1>
                                            Convention Events
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
                                                <Link to="/events/pre/2" type="button" className={`btn btn-default ${type === 'pre'?'active':'notactive'}`}>Pre</Link>
                                                <Link to="/events/hoc/1" type="button" className={`btn btn-default ${type === 'hoc'?'active':'notactive'}`}>During</Link>
                                                <Link to="/events/post/3" type="button" className={`btn btn-default ${type === 'post'?'active':'notactive'}`}>Post</Link>
                                            </div>
                                            <h5>Available Events</h5>
                                            <ul className="nav nav-pills nav-stacked">
                                                {
                                                    DataEvents.all().filter(g => g.type === type).map(e => (
                                                        <li key={e.id} className={e.id == number?'active':'notactive'}>
                                                            <Link to={`/events/${type}/${e.id}`}>
                                                                {e.name}
                                                                <small>Price ${e.price}</small>
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
