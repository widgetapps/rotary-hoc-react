import React, { Component } from 'react';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';

class Ideas extends Component {
    render() {
        const meta = {
            title: 'Ideas | Rotary International Convention Toronto 2018 (June 23-27)',
            description: 'I am a description, and I can create multiple tags',
            canonical: 'http://rotary2018.org/ideas',
            meta: {
                charset: 'utf-8',
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

        return (
            <DocumentMeta {...meta} extend>
                <Header />
                <BodyClassName className="page-about"><div id="content">
                    <div className="container" id="about">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-header">
                                    <h1>
                                        Submit Your Ideas
                                        <small>Have some ideas to contribute? Submit them here.</small>
                                    </h1>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2>We need your help!</h2>

                                        <p>The Host Organizing Committee for the 2018 RI Convention is Toronto needs your help! Specifically, we
                                            need your ideas and thoughts on:</p>

                                        <ul>
                                            <li><em><b>Entertainment:</b></em><br />
                                                In the House of Friendship we have a stage that needs entertainment.
                                                We need to have acts running back to back pretty much all day. If you have ideas of great local
                                                Candian entertainment, please submit them. As Toronto is a multi-cultural city, we're looking for
                                                representation that represents our city.
                                            </li>
                                            <li><em><b>Sponsors:</b></em><br />
                                                We're looking for contacts to sponsor the convention. If you have contacts at companies that are looking
                                                for the kind of exposure a convention with 25,000+ attendees provides, please <a href="mailto:sponsors@rotary2018.org">email us more
                                                    information</a>. We're vetting the sponsors and then staff at RI follows through.
                                            </li>
                                            <li><em><b>Exhibitors:</b></em><br />
                                                The House of Friendship needs exhibitors. If you have any contacts that would like to have a booth at
                                                the convention, please <a href="mailto:exhibitors@rotary2018.org">send them our way</a>. Most details, including a floor plan, will be posted
                                                once everything has been finalized.
                                            </li>
                                        </ul>

                                        <p>If you have any other ideas beyond these immediate needs, please feel free to submit them. Someone on the
                                            HOC will get back to you.</p>

                                        <a role="button" class="btn btn-primary btn-lg" href="https://docs.google.com/a/rotary7070.ca/forms/d/e/1FAIpQLSfUCVDpoOuKydOsLdAX207c9kd3yBhdP4l1Z81u_qA_gOhX0w/viewform" target="new">Submit Your Ideas <span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a>
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

export default Ideas;
