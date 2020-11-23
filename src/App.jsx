import React, { useState } from 'react';
import {
  Layout, Menu, Switch, Button, message,
} from 'antd';
import { connect, useDispatch } from 'react-redux';
import './App.css';

// Icons import
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BulbOutlined,
  BulbFilled,
} from '@ant-design/icons';

import PropTypes from 'prop-types';

import { changeNightModeAction } from './actions/mapActions';

// Component imports
import Osm from './components/Osm';
import Input from './components/Input';
import DisplayCard from './components/DisplayCard';

const {
  Header, Sider, Content, Footer,
} = Layout;

/*
  Main app component with layout and modular components
*/
const App = ({ nightMode }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const dispatch = useDispatch();

  // Handler to toggle sidebar
  const toggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Night mode dispatch action
  const changeNightMode = () => {
    dispatch(changeNightModeAction());
  };

  // Simple message display handler
  const messageHandler = (info) => {
    message.info(info);
  };

  // Theme related color initializations
  const theme = nightMode ? 'dark' : 'light';
  const themeColor = nightMode ? '#131629' : '#ffffff';
  const themeText = nightMode ? '#ffffff' : '#000000';

  return (
    <Layout>
      {/* Sidebar component start */}
      <Sider theme={theme} trigger={null} collapsible collapsed={sidebarCollapsed}>
        <Menu theme={theme} mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item disabled key="4" icon={nightMode ? <BulbOutlined /> : <BulbFilled />}>
            {nightMode ? 'Dark Mode' : 'Light Mode'}
            <Switch onClick={changeNightMode} />
          </Menu.Item>
        </Menu>
      </Sider>
      {/* Sidebar component end */}
      <Layout className="site-layout" style={{ height: '100vh', width: '100vw' }}>
        {/* Header component start */}
        <Header
          className="site-layout-background"
          style={{
            paddingLeft: 20, color: themeText, backgroundColor: themeColor, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          {React.createElement(sidebarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
          <Button onClick={() => messageHandler('This is a dummy login button')}>Login</Button>
          <UserOutlined style={{ fontSize: '20px' }} onClick={() => messageHandler('This is a dummy profile button')} />
        </Header>
        {/* Header component end */}

        {/* Content container for page content */}
        <Content className="site-layout-background">
          {/* OpenStreetMaps component */}
          <Osm />
          {/* Floating inputs and card information container */}
          <div className="floatingContainer">
            {/* Input: Selector input component */}
            <Input />
            {/* DisplayCard: Info display card component */}
            <DisplayCard />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: themeColor, color: themeText }}>Open Street Maps ©2020</Footer>
      </Layout>
    </Layout>
  );
};

function mapStateToProps(store) {
  return {
    nightMode: store.app.nightMode,
  };
}

App.propTypes = {
  nightMode: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
