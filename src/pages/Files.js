import React, { Component } from 'react';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';

class Files extends Component {
    render() {
        const meta = {
            title: 'Files | Rotary International Convention Toronto 2018 (June 23-27)',
            canonical: 'http://rotary2018.org/files',
            meta: {
                property: {
                    'og:url': 'http://rotary2018.org/files'
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
                                        <small>Here are some useful files form the HOC</small>
                                    </h1>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p>Files will be posted soon.</p>
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
