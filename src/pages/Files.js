import React, { Component } from 'react';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';

class Files extends Component {
    render() {
        const meta = {
            title: 'Files | Rotary International Convention Toronto 2018 (June 23-27)',
            canonical: 'http://rotary2018.org/support-files',
            meta: {
                property: {
                    'og:url': 'http://rotary2018.org/support-files'
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
                                        HOC File
                                        <small>Here are some useful files from the HOC</small>
                                    </h1>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3>Sponsorship Documents</h3>
                                        <ul>
                                            <li><a href="/support-files/HOC_IC18_Sponsorship_Brochure.pdf">Sponsorship Brochure (PDF)</a></li>
                                            <li><a href="/support-files/2018_Toronto_Rotary_Convention-Sponsorship_Presentation.pptx">Sponsorship Powerpoint Presentation (PPTX)</a></li>
                                            <li><a href="/support-files/Sponsorship_Supporter_Levels.pdf">Sponsorship Supporter Levels (PDF)</a></li>
                                            <li><a href="/support-files/sponsorship_cover_letter.docx">Sponsorship Cover Letter (DOCX(</a></li>
                                        </ul>

                                        <h3>Event Documents</h3>
                                        <ul>
                                            <li><a href="/support-files/RI18_HOC_Events_Brochure.pdf">Events Brochure</a></li>
                                            <li><a href="/support-files/Destination_Eradication_Cover.pdf">Destination Eradication Cover</a></li>
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

export default Files;
