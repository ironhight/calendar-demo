import React, { Component } from "react";
import { Modal, Button, Checkbox, TimePicker, Select, Input } from "antd";
import DateRange from "../../DatePicker/DateRange";
import moment from "moment";

class EditCustomer extends Component {
  state = { visible: false };

  showModalEdit = () => {
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

  render() {
    const format = "HH:mm";
    const { Option } = Select;
    const { TextArea } = Input;
    return (
      <div id="editCustomerModal">
        <Button
          type="primary"
          onClick={this.showModalEdit}
          style={{
            backgroundColor: "#ffd6d7",
            color: "black",
            width: "300px",
            textAlign: "left",
            marginBottom: "8px",
            borderStyle: "none"
          }}
        >
          09:00 - UserName1
        </Button>

        <Button
          type="primary"
          onClick={this.showModalEdit}
          style={{
            backgroundColor: "#d4e8fd",
            color: "black",
            width: "300px",
            textAlign: "left",
            marginBottom: "8px",
            borderStyle: "none"
          }}
        >
          23:00 - UserName2
        </Button>

        <Button
          type="primary"
          onClick={this.showModalEdit}
          style={{
            backgroundColor: "#fff6d8",
            color: "black",
            width: "300px",
            textAlign: "left",
            marginBottom: "8px",
            borderStyle: "none"
          }}
        >
          2:00 - UserName3
        </Button>

        <Button
          type="primary"
          onClick={this.showModalEdit}
          style={{
            backgroundColor: "#C2F7EE",
            color: "black",
            width: "300px",
            textAlign: "left",
            marginBottom: "8px",
            borderStyle: "none"
          }}
        >
          6:00 - UserName4
        </Button>

        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <h1 style={{ textAlign: "left", fontWeight: "bold" }}>
            New Blocked time
          </h1>
          <div className="date__range">
            <p style={{ marginTop: "25px", fontSize: "13px", fontWeight: 500 }}>
              Date range
            </p>
            <DateRange />
            <Checkbox
              style={{
                marginTop: "5px",
                fontSize: "13px",
                fontWeight: 500
                // background: "red"
              }}
            >
              Repeated
            </Checkbox>
          </div>
          <div
            className="time"
            style={{ marginTop: "25px", fontSize: "13px", fontWeight: 500 }}
          >
            <p>Time</p>
            <TimePicker
              defaultValue={moment("12:08", format)}
              format={format}
            />
            <span style={{ margin: "0px 5px" }}>-</span>
            <TimePicker
              defaultValue={moment("12:08", format)}
              format={format}
            />
          </div>
          <div
            className="Staff"
            style={{ marginTop: "25px", fontSize: "13px", fontWeight: 500 }}
          >
            <p>Staff</p>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              filterOption={(input: any, option: any) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
            ,
          </div>
          <div
            className="reason"
            style={{ marginTop: "25px", fontSize: "13px", fontWeight: 500 }}
          >
            <p>Reason</p>
            <TextArea rows={4} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default EditCustomer;
