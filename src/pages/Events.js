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
                        <div className="container" id="about">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-header">
                                        <h1>
                                            Convention Events
                                            <small>Event details will be posted soon</small>
                                        </h1>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>The HOC committee is working to get events posted very soon.</p>
                                            <Link to="/news/1" className="btn btn-more i-right">Learn More <i className="fa fa-plus"></i></Link>
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
