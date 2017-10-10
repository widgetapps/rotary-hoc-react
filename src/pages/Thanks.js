import React, { Component } from 'react';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';

class Thanks extends Component {
    render() {
        const meta = {
            title: 'Thanks | Rotary International Convention Toronto 2018 (June 23-27)'
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
                                        Email submitted
                                        <small>Your email has been sent to the HOC</small>
                                    </h1>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p>Thank you for contacting the Rotary 2018 Host Organizing Committee. Someone will get back
                                            to you soon.</p>
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

export default Thanks;
