import React, { Component } from 'react';

class Parent extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>父组件</h2>
        <Child name="张三" func={() => { console.log(111); }}></Child>
      </div>
    );
  }
}

interface propsInterface {
  name: string,
  func?: () => void, // 接收函数
}
class Child extends Component<propsInterface, any> {
  render() {
    return (
      <div>
        <h2>子组件 - { this.props.name }</h2>
      </div>
    );
  }
}

export default Parent;