import React, { Component } from 'react';

// 父组件
class App extends Component {
  state = {
    persons: ["张三", "李四", "王五"]
  };

  render() {
    let { persons } = this.state;
    return (
      <div>
        <h1>App组件</h1>
        <hr />
        <Child>
          {/* 这里可以直接读取父组件的state，在一定程度上可以减少父子之间的通信 */}
          <p>第一：子组件当中的内容 -- {persons[0]}</p>
          <p>第二：子组件当中的内容 -- {persons[1]}</p>
          <p>第三：子组件当中的内容 -- {persons[2]}</p>
        </Child>
      </div>
    );
  }
}
export default App;

// 子组件
class Child extends Component {
  render() {
    return (
      <div>
        <h1>Child组件</h1>
        <div>{ this.props.children[0] }</div>
        <div>{ this.props.children[1] }</div>
        <div>{ this.props.children[2] }</div>
      </div>
    );
  }
}