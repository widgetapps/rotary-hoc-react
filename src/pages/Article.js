import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import DataNews from '../data/DataNews';

class Article extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render() {


        let article = DataNews.get(
            parseInt(this.props.number, 10)
        );
        if (!article) {
            article =  DataNews.get(DataNews.articles.length);
        }

        const meta = {
            title: 'News - ' + article.title + ' | Rotary International Convention Toronto 2018 (June 23-27)',
            description: article.content[0],
            canonical: '/news/' + article.number,
            meta: {
                name: {
                    keywords: 'rotary, convention, 2018, toronto, hoc, host organizing committee, host, organizing, committee, news',
                    'twitter:title': 'News - ' + article.title + ' | Rotary International Convention Toronto 2018 (June 23-27)',
                    'twitter:description': article.content[0]
                },
                property: {
                    'og:title': 'News - ' + article.title + ' | Rotary International Convention Toronto 2018 (June 23-27)',
                    'og:url': 'http://rotary2018.org/news/' + article.number,
                    'og:description': article.content[0]
                }
            }
        };

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
