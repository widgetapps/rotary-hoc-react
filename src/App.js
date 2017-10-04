import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import {Switch, Route} from 'react-router-dom';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';
import News from "./pages/News";
import Home from "./pages/Home";
import Hof from "./pages/Hof";
import Events from "./pages/Events";

class App extends Component {
    render() {
        const meta = {
            title: 'Rotary International Convention Toronto 2018 (June 23-27)',
            meta: {
                charset: 'utf-8',
            }
        };

        return (
                <DocumentMeta {...meta} extend>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/events" component={Events}/>
                        <Route exact  path="/news" component={News}/>
                        <Route path="/news/:number" component={News}/>
                        <Route path="/hof" component={Hof}/>
                    </Switch>
                    <Footer />
                </DocumentMeta>
        );
    }
}

export default App;
