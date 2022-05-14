import React, { Component } from 'react';

import RouterComponent from "./router/index"; // 引用路由文件
import store from "./redux/store";

class componentName extends Component {
  state = {
    show: store.getState().show
  };

  componentDidMount(){
    store.subscribe(() => {
      this.setState({ show: store.getState().show });
    });
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <RouterComponent></RouterComponent>

        { this.state.show && 
          <div style={{ padding: "10px 15px", display: "flex", justifyContent: "space-around", border: "1px solid #ccc", marginTop: "20px" }}>
            <div>电影</div>
            <div>影院</div>
            <div>个人</div>
          </div>
        }
      </div>
    );
  }
}

export default componentName;