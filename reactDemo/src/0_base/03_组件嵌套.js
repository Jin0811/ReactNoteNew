
import React, { Component } from 'react';

// 根组件
class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Swiper></Swiper>
        <TabBar></TabBar>
      </div>
    );
  }
}

// 导航栏
class NavBar extends Component {
  render() {
    return (
      <div>
        导航栏
      </div>
    );
  }
}

// 轮播图
class Swiper extends Component {
  render() {
    return (
      <div>
        轮播图
      </div>
    );
  }
}

// 选项卡
class TabBar extends Component {
  render() {
    return (
      <div>
        选项卡
      </div>
    );
  }
}

export default App;