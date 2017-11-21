import React, { Component } from 'react';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';

class ClubEvent extends Component {
    render() {
        const meta = {
            title: 'Post Club Event | Rotary International Convention Toronto 2018 (June 23-27)',
            description: 'Request to post a club event.',
            canonical: 'http://rotary2018.org/clubevent',
            meta: {
                property: {
                    'og:url': 'http://rotary2018.org/clubevent'
                }
            }
        };

        return (
            <DocumentMeta {...meta} extend>
                <Header />
                <BodyClassName className="page-about"><div id="content">
                    <div className="container" id="about">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-header">
                                    <h1>
                                        Post a Club Event
                                        <small>Add your club event to the event listing.</small>
                                    </h1>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p>As a service to clubs in the GTA, we can list your club event on the HOC
                                            website under the Events section. This gives your club an opportunity to
                                            get some exposure with convention attendees. We are only accepting club events
                                            from June 15th to July 8th 2018 and events that are not occurring during
                                            the convention itself (June 23rd to 27th).</p>
                                        <p>All submissions must be approved by the Toronto 2018 HOC. Approved events
                                            will be posted no longer than 30 days after submission. Cut off date for
                                            event submission is May 1st, 2018.</p>
                                        <a role="button" className="btn btn-primary btn-lg" href="https://docs.google.com/forms/d/e/1FAIpQLSe2RQ05Kbf_Vk0j2qU2zmTGR2btxPD0R3BHEBrxbgehGdNlSg/viewform">Submit Request</a>
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

export default ClubEvent;
