import React, { Component } from 'react';

import RouterComponent from './router'; // 引入路由组件
import NavBar from "./components/NavBar"; // 导航栏组件
import "./style.scss";

import store from "./redux/store";

class App extends Component {
  state = {
    show: store.getState().TabBarReducer.show, // 获取store初始值
  }

  componentDidMount(){
    // App - 订阅
    store.subscribe(() => {
      console.log("App - 订阅", store.getState());

      // 监听到事件之后，转换为自身的state
      let { TabBarReducer: { show } } = store.getState();
      this.setState({ show });
    });
  }

  render() {
    return (
      <div className="redux-demo">
        {/* 路由组件 */}
        <RouterComponent>
          {/* 导航栏组件 */}
          { this.state.show && <NavBar></NavBar> }
        </RouterComponent>
      </div>
    );
  }
}

export default App;