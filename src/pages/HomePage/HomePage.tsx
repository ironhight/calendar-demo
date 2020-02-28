import React, { Component } from "react";
import { DatePicker, Button, Menu, Dropdown, Select } from "antd";
import {
  UserOutlined,
  DownOutlined,
  EyeOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined
} from "@ant-design/icons";
import Location from "../../images/pin.png";
import userHome from "../../images/userHome.png";
import Gift from "../../images/gift.png";
import moment from "moment";
import Calenderss from "../../components/Caldender/Calendar";
const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";

class HomePage extends Component {
  render() {
    const menuLocation = (
      <Menu>
        <Menu.Item key="1">
          <UserOutlined />
          1st menu item
        </Menu.Item>
        <Menu.Item key="2">
          <UserOutlined />
          2nd menu item
        </Menu.Item>
        <Menu.Item key="3">
          <UserOutlined />
          3rd item
        </Menu.Item>
      </Menu>
    );

    const menuDoctor = (
      <Menu>
        <Menu.Item key="1">
          <UserOutlined />
          1st menu item
        </Menu.Item>
        <Menu.Item key="2">
          <UserOutlined />
          2nd menu item
        </Menu.Item>
        <Menu.Item key="3">
          <UserOutlined />
          3rd item
        </Menu.Item>
      </Menu>
    );

    const menuByday = (
      <Menu>
        <Menu.Item key="1">
          <UserOutlined />
          1st menu item
        </Menu.Item>
        <Menu.Item key="2">
          <UserOutlined />
          2nd menu item
        </Menu.Item>
        <Menu.Item key="3">
          <UserOutlined />
          3rd item
        </Menu.Item>
      </Menu>
    );

    const { Option } = Select;

    const dropDown = () => {
      return <img src={userHome} alt="userHome" />;
    };

    return (
      <>
        <div className="HomePage">
          <div className="home__picker">
            <Button
              type="primary"
              icon={<ArrowLeftOutlined />}
              style={{ marginTop: "10px", marginRight: "12px" }}
            />
            <span className="home__picker--pickday">
              <RangePicker
                defaultValue={[
                  moment("2015/01/01", dateFormat),
                  moment("2015/01/01", dateFormat)
                ]}
                format={dateFormat}
              />
            </span>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              style={{ marginTop: "10px", marginLeft: "12px" }}
            />
          </div>
          <div className="home__location">
            <Dropdown overlay={menuLocation}>
              <Button>
                <img src={Location} alt="location" />
                Branch Dang Luu
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="home__doctor">
            <Dropdown overlay={menuDoctor}>
              <Button>
                <img
                  src={userHome}
                  alt="userHome"
                  style={{ width: "20px", height: "20px", marginRight: "5px" }}
                />
                <span className="home__doctor--user" style={{ opacity: "0.5" }}>
                  All doctor
                </span>
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="home__byday">
            <Dropdown overlay={menuByday}>
              <Button>
                <img src={Gift} alt="gift" style={{ marginRight: "5px" }} />
                <span
                  className="home__byday--option"
                  style={{ fontSize: "13px" }}
                >
                  View by Day
                </span>
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="home__icon">
            <EyeOutlined />
          </div>
          <div className="home__display">
            <span className="display__1">
              <Button>
                <PlusSquareOutlined />
              </Button>
            </span>
            <span className="display__2">
              <Button>
                <MinusSquareOutlined />
              </Button>
            </span>
          </div>
        </div>
        <div className="calenderss">
          <Calenderss />
        </div>
      </>
    );
  }
}

export default HomePage;
