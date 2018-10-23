import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import Home from './page/home';
import './style/common.less';
import { HashRouter, Route, Switch } from 'react-router-dom'
export default class Admin extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Row className="container">
                <Col span="3" className="nav-left">
                    <NavLeft />
                </Col>
                <Col span="21" className="main">
                    <Header />
                    <Row className="content">
                       {this.props.children}
                    </Row>1
                    <Footer />
                </Col>
            </Row >
        )
    }
}