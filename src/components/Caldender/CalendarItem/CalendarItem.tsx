import React, { Component } from "react";
import { connect } from "react-redux";
import { Avatar, Modal } from "antd";
import _ from "lodash";

import { Row, Col } from "antd";
import * as DoctorActions from "../../../store/actions/doctors";
import EditCustomer from "../../Modal/EditCustomer/EditCustomer";

interface Props {
  doctors: any;
  getDoctor: () => void;
}

interface State {
  lichHen: number;
  visible: boolean;
}

class CalendarItem extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      lichHen: 0,
      visible: false
    };
  }

  componentDidMount() {
    this.props.getDoctor();
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = (e: any) => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = (e: any) => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  renderLichHen = () => {
    this.setState({})
  }

  render() {
    let { doctors } = this.props;
    let temp1,
      temp2,
      temp3,
      temp4,
      temp5,
      temp6,
      temp7,
      temp8,
      temp9,
      temp10: any;
    if (!_.isEmpty(doctors)) {
      console.log("TCL: CalendarItem -> render -> doctors", doctors);
      temp1 = doctors.filter((item: { id: number }) => item.id === 1)[0];
      temp2 = doctors.filter((item: { id: number }) => item.id === 2)[0];
      temp3 = doctors.filter((item: { id: number }) => item.id === 3)[0];
      temp4 = doctors.filter((item: { id: number }) => item.id === 4)[0];
      temp5 = doctors.filter((item: { id: number }) => item.id === 5)[0];
      temp6 = doctors.filter((item: { id: number }) => item.id === 6)[0];
      temp7 = doctors.filter((item: { id: number }) => item.id === 7)[0];
      temp8 = doctors.filter((item: { id: number }) => item.id === 8)[0];
      temp9 = doctors.filter((item: { id: number }) => item.id === 9)[0];
      temp10 = doctors.filter((item: { id: number }) => item.id === 10)[0];
    }

    return (
      <div className="CalenderItem">
        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp1) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp1.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp1.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp1.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem edit" onClick={this.showModal}>
            {!_.isEmpty(temp1) && (
              <div className="doctor__appts">
                <p>{temp1.appts} appointment</p>
              </div>
            )}
          </Col>

          <Modal
            title="23 lich hen"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}
          >
            <EditCustomer />
          </Modal>

          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp1) && (
              <div className="doctor__appts">
                <p>{temp1.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem appts"></Col>
        </Row>

        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp2) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp2.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp2.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp2.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
        </Row>

        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp3) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp3.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp3.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp3.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp3) && (
              <div className="doctor__appts">
                <p>{temp3.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
        </Row>

        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp4) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp4.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp4.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp4.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp4) && (
              <div className="doctor__appts">
                <p>{temp4.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
        </Row>

        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp5) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp5.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp5.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp5.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp5) && (
              <div className="doctor__appts">
                <p>{temp5.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
        </Row>

        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp6) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp6.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp6.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp6.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp6) && (
              <div className="doctor__appts">
                <p>{temp6.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
        </Row>

        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp6) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp6.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp6.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp6.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp6) && (
              <div className="doctor__appts">
                <p>{temp6.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
        </Row>

        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp7) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp7.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp7.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp7.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp7) && (
              <div className="doctor__appts">
                <p>{temp7.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
        </Row>

        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp8) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp8.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp8.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp8.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp8) && (
              <div className="doctor__appts">
                <p>{temp8.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
        </Row>

        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp9) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp9.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp9.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp9.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp9) && (
              <div className="doctor__appts">
                <p>{temp9.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
        </Row>

        <Row>
          <Col span={3} className="colItem doctor">
            {!_.isEmpty(temp10) && (
              <div className="doctor">
                <div className="doctor__avatar">
                  <Avatar src={temp10.avatar} />
                </div>
                <div className="doctor__name">
                  <p>{temp10.name}</p>
                  <p style={{ opacity: "0.5" }}>{temp10.appts} appts</p>
                </div>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem edit">
            {!_.isEmpty(temp10) && (
              <div className="doctor__appts">
                <p>{temp10.appts} appointment</p>
              </div>
            )}
          </Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
          <Col span={3} className="colItem"></Col>
        </Row>
      </div>
    );
  }
  CustommerTable(): React.ReactNode {
    throw new Error("Method not implemented.");
  }
}

const mapStateToProps = (state: { doctorReducer: any }) => {
  return {
    doctors: state.doctorReducer
  };
};

export default connect(mapStateToProps, DoctorActions)(CalendarItem);
