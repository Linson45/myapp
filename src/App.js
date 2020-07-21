import React, { Component } from "react";
import QrReader from "react-qr-reader";
import "antd/dist/antd.css";

import { Input, Modal, Button } from "antd";
class App extends React.Component {
  state = { visible: false, result: "No result" };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <>
        <Input placeholder="click to scan " onClick={this.showModal} />
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "100%" }}
          />
          <p>{this.state.result}</p>
        </Modal>
      </>
    );
  }
}
// function showmodal() {
//   return (
//     <Modal
//       title="Basic Modal"
//       visible={this.state.visible}
//       onOk={this.handleOk}
//       onCancel={this.handleCancel}
//     >
//       <p>Test</p>
//     </Modal>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Input placeholder="Basic usage" onChange={showmodal} />
//     </div>
//   );
// }

export default App;
