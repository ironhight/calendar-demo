import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import HomePage from "../../pages/HomePage/HomePage";

const { Content, Sider } = Layout;

class SideBar extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu defaultSelectedKeys={["13"]}>
              <Menu.Item key="1">
                <UserOutlined />
              </Menu.Item>
              <Menu.Item key="2">
                <VideoCameraOutlined />
              </Menu.Item>
              <Menu.Item key="3">
                <UploadOutlined />
              </Menu.Item>
              <Menu.Item key="4">
                <UserOutlined />
              </Menu.Item>

              <Menu.Item key="1">
                <UserOutlined />
              </Menu.Item>
              <Menu.Item key="2">
                <VideoCameraOutlined />
              </Menu.Item>
              <Menu.Item key="3">
                <UploadOutlined />
              </Menu.Item>
              <Menu.Item key="4">
                <UserOutlined />
              </Menu.Item>

              <Menu.Item key="1">
                <UserOutlined />
              </Menu.Item>
              <Menu.Item key="2">
                <VideoCameraOutlined />
              </Menu.Item>
              <Menu.Item key="3">
                <UploadOutlined />
              </Menu.Item>
              <Menu.Item key="4">
                <UserOutlined />
              </Menu.Item>

              <Menu.Item key="4">
                <UserOutlined />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <HomePage />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default SideBar;
