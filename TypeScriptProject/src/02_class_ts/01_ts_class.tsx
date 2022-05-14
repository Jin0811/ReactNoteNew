import React, { Component } from 'react';

// 创建一个接口
interface stateInterface{
  name: string
}
// Component接收一个泛型，第一个约束属性、第二个约束状态
class componentName extends Component<any, stateInterface> {
  state = {
    name: "tom"
  };

  handleClick = () => {
    this.setState({ name: "jack" }); // 因为页面当中使用了toUpperCase，但是数字没有此方法，所以会导致报错，也就需要进行约束
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>{ this.state.name.toUpperCase() }</h1>
        <button onClick={this.handleClick}>修改名字</button>
      </div>
    );
  }
}

export default componentName;