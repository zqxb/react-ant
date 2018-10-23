import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import './index.less';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavLeft extends React.Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        });
    }
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        });
    }
    render() {
        return (
            <div className="nav-left">
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Imooc Ms</h1>
                </div>
                <Menu
                    theme='dark'>

                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}