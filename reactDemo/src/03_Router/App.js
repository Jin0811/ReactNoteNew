import React, { Component } from 'react';

import RouterComponent from './router'; // 引入路由组件
import NavBar from "./components/NavBar"; // 导航栏组件

import "./style.scss";

class App extends Component {

  render() {
    return (
      <div className="router-demo">
        {/* 路由组件 */}
        <RouterComponent>
          {/* 导航栏组件 */}
          <NavBar></NavBar>
        </RouterComponent>
      </div>
    );
  }
}

export default App;