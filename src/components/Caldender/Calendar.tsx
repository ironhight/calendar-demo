import React, { Component } from "react";
import { Row, Col } from "antd";
import CalendarItem from "./CalendarItem/CalendarItem";

class Calendarss extends Component {
  render() {
    return (
      <div className="calenderHeader">
        <div className="calenderHeader-top">
          <Row className="calenderHeader__row">
            <Col span={3}></Col>
            <Col span={3}>
              <div className="calenderHeader__item">
                <p className="calender__day">22</p>
                <p className="calender__th">MONDAY</p>
              </div>
            </Col>
            <Col span={3}>
              <div className="calenderHeader__item">
                <p className="calender__day">23</p>
                <p className="calender__th">TUESDAY</p>
              </div>
            </Col>
            <Col span={3}>
              <div className="calenderHeader__item">
                <p className="calender__day">24</p>
                <p className="calender__th">WEDNESDAY</p>
              </div>
            </Col>
            <Col span={3}>
              <div className="calenderHeader__item">
                <p className="calender__day">25</p>
                <p className="calender__th">THUSDAY</p>
              </div>
            </Col>
            <Col span={3}>
              <div className="calenderHeader__item">
                <p className="calender__day">26</p>
                <p className="calender__th">FRIDAY</p>
              </div>
            </Col>
            <Col span={3}>
              <div className="calenderHeader__item">
                <p className="calender__day">27</p>
                <p className="calender__th">SATURDAY</p>
              </div>
            </Col>
            <Col span={3}>
              <div className="calenderHeader__item">
                <p className="calender__day end">28</p>
                <p className="calender__th">SUNDAY</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="calenderHeader__content">
          <CalendarItem />
        </div>
      </div>
    );
  }
}

export default Calendarss;
