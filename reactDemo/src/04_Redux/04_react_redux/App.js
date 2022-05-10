import React, { Component } from 'react';

import RouterComponent from './router'; // 引入路由组件
import NavBar from "./components/NavBar"; // 导航栏组件
import "./style.scss";

import { connect } from "react-redux"; // 引入connect，connect是一个高阶组件

class App extends Component {
  componentDidMount(){
    // console.log(this.props);
  }

  render() {
    return (
      <div className="redux-demo">
        {/* 路由组件 */}
        <RouterComponent>
          {/* 导航栏组件 */}
          { this.props.show && <NavBar></NavBar> }
        </RouterComponent>
      </div>
    );
  }
}

/**
 * connect()函数
 * 1、第一个参数：是一个回调函数，回调函数的返回值是对象，对象当中的键值对会传递给子组件
 *    回调函数接收一个形参state，代表的是store当中的state
 * 2、第二个参数为：是一个对象，将来给子组件传递的回调函数
 */
export default connect((state) => {
  return {
    test: "测试传参",
    show: state.TabBarReducer.show,
  };
})(App);
