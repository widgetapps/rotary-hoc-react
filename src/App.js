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
import Volunteer from './pages/Volunteer';
import Host from './pages/Host';
import Files from './pages/Files';
import About from './pages/About';

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
                        <Route exact path="/events" component={Events}/>
                        <Route path="/events/:type/:id" component={Events}/>
                        <Route exact  path="/news" component={News}/>
                        <Route path="/news/:number" component={News}/>
                        <Route path="/hof" component={Hof}/>
                        <Route path="/volunteer" component={Volunteer}/>
                        <Route path="/host" component={Host}/>
                        <Route path="/files" component={Files}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                    <Footer />
                </DocumentMeta>
        );
    }
}

export default App;
