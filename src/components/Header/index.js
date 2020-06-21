import './Header.less';
import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import { Layout, Menu, Button } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, SearchOutlined, MenuOutlined } from '@ant-design/icons';

const { Header, } = Layout;
const { SubMenu } = Menu;

export default class HeaderComp extends Component {

    constructor(props){
        super(props);

        this.state={
            isScrolled: false,
            current: 'mail',
        }

        this.onScrolling = this.onScrolling.bind(this);
    }

    componentDidMount(){
        document.addEventListener('scroll', this.onScrolling);
    }

    componentWillUnmount(){
        document.removeEventListener('scroll', this.onScrolling);
    }

    onScrolling(e){
        // console.log(e);
        if(window.scrollY>5){
            this.setState({isScrolled: true})
        }else{
            this.setState({isScrolled: false})
        }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };


    render() {
        const { isScrolled }=this.state

        return (
            <Header className={isScrolled ? "header-blue" : ''}>
                <div className="container" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex'}}>
                        <div className="logo" ><img src='assets/white_logo.png' alt='logo' /></div>
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            {/* <Menu.Item key="mail" icon={<MailOutlined />}>
                                Navigation One
                            </Menu.Item>
                            <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                                Navigation Two
                            </Menu.Item> */}
                            <SubMenu   title="Home">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="Celebrities">
                                <Link to="https://ant.design">
                                    Celebrities
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="Social Media">
                                <Link to="https://ant.design">
                                    Social Media Stars
                                </Link>
                            </Menu.Item> 
                            <Menu.Item key="Experience">
                                <Link to="https://ant.design">
                                      Experience
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="Download">
                                <Link to="https://ant.design" >
                                    Download
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div>
                        <Link className='login' to='/login'><SearchOutlined />&nbsp; Login</Link>

                        <Button className="menu-btn" type="primary" icon={<MenuOutlined  />} size={22} />
                        
                    </div>
                </div>
            </Header>
        )
    }
}
