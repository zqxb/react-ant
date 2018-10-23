import React from 'react';
import {  BrowserRouter as Router, Route , Link } from 'react-router-dom';
import About from './about';
import Main from './Main';
import Totic from './topic';

export default class Home extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/toicp">toicp</Link>
                        </li>
                    </ul>
                    <hr />
                    <Route exact  path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/toicp" component={Totic}></Route>
                </div>
            </Router>
        )
    }
}