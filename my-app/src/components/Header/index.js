import React from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Util from '../../utils/utils'
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            susTime:''
        }
    }
    componentWillMount(){
        this.setState({
            username:'张琪'
        });
        setInterval(() => {
          let susTime = Util.frommetaDate(new Date().getTime());
            this.setState({
                susTime
            })
        },1000);
    }
  render(){
      return(
          <div className="header">
              <Row className="header-top">
                  <Col span="24">
                    <span>欢迎{this.state.username}</span>
                    <a hret="">退出</a>
                  </Col>
              </Row>
              <Row className="breadcrum">
              <Col span="4" className="breadcrum-title">
                 首页
              </Col>
              <Col span="20" className="wrather">
              <span className="date">{this.state.susTime}</span>
              <span>晴天多云</span>
              </Col>
              </Row>
          </div>
      )
  }
} 