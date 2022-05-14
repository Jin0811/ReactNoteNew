import React, { Component } from 'react';

import RouterComponent from "./router/index"; // 引用路由文件

class componentName extends Component {

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <RouterComponent></RouterComponent>
      </div>
    );
  }
}

export default componentName;