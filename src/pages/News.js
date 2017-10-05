import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';
import DocumentMeta from 'react-document-meta';
import BodyClassName from 'react-body-classname';
import DataNews from '../data/DataNews';
import Article from './Article';

class News extends Component {

    render() {
        const meta = {
            title: 'News | Rotary International Convention Toronto 2018 (June 23-27)',
            description: 'I am a description, and I can create multiple tags',
            canonical: 'http://rotary2018.org/news',
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
            }};

        let number = parseInt(this.props.match.params.number, 10);
        if (!number || number < 1 || number > DataNews.articles.length) {
            number = DataNews.articles.length;
        }

        return (
            <DocumentMeta {...meta} extend>
                <Header />
                <BodyClassName className="page-about">
                    <div id="content">
                        <div className="container" id="about">
                            <div className="row">
                                <div className="page-header">
                                    <h1>
                                        HOC Convention News
                                        <small>This is an awesome little news section tagline</small>
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-9 col-md-push-3">
                                    <Article number={this.props.match.params.number} />
                                </div>
                                <div className="col-md-3 col-md-pull-9 sidebar">
                                    <ul className="nav nav-pills nav-stacked">
                                        {
                                            DataNews.all().map(n => (
                                                <li key={n.number} className={n.number == number?'active':'notactive'}>
                                                    <Link to={`/news/${n.number}`}>
                                                        {n.title}
                                                        <small>Posted {n.date}</small>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </BodyClassName>
            </DocumentMeta>
        );
    }
}

export default News;
