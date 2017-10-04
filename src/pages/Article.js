import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import DataNews from '../data/Data-News';

class Article extends Component {
    render() {
        const meta = {
            title: 'Events | Rotary International Convention Toronto 2018 (June 23-27)',
            description: 'I am a description, and I can create multiple tags',
            canonical: 'http://rotary2018.org/',
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


        var article = DataNews.get(
            parseInt(this.props.number, 10)
        );
        if (!article) {
            article =  DataNews.get(DataNews.articles.length);
        }

        return (
            <DocumentMeta {...meta} extend>
                <div class="block block-border-bottom-grey block-pd-sm">
                    <h3 class="block-title">{article.title}</h3>
                    {article.content.map(a => (
                        <p>{a}</p>
                    ))}
                </div>
            </DocumentMeta>
        );
    }
}

export default Article;
