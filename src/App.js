import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import {Switch, Route} from 'react-router-dom';
import Footer from './Footer';
import './App.css';
import News from "./pages/News";
import Home from "./pages/Home";
import Hof from "./pages/Hof";
import Events from "./pages/Events";
import Volunteer from './pages/Volunteer';
import Host from './pages/Host';
import Files from './pages/Files';
import About from './pages/About';
import Thanks from './pages/Thanks';
import ClubEvent from './pages/ClubEvent';
import Ideas from './pages/Ideas';

class App extends Component {
    render() {
        const meta = {
            title: 'Rotary International Convention Toronto 2018 (June 23-27)',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'rotary, convention, 2018, toronto, hoc, host organizing committee, host, organizing, committee',
                    'twitter:card': 'summary',
                    'twitter:site': '@RotaryTO2018',
                    'twitter:title': 'Rotary International Convention Toronto 2018 (June 23-27)',
                    'twitter:description': 'There’s a world of opportunity waiting for you at the Toronto convention.',
                    'twitter:image': '/img/c18toronto_logo.png'
                },
                property: {
                    'og:title': 'Rotary International Convention Toronto 2018 (June 23-27)',
                    'og:type': 'website',
                    'og:image': '/img/c18toronto_logo.png',
                    'og:url': 'http://rotary2018.org/',
                    'og:description': 'There’s a world of opportunity waiting for you at the Toronto convention.'
                }
            }
        };

        return (
                <DocumentMeta {...meta} extend>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                    <Footer />
                </DocumentMeta>
        );
    }
}

export default App;
