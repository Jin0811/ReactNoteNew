import React, { Component } from 'react';

class App extends Component {
  state = {
    num: 1,
  };

  // 状态将要更新（可以使用UNSAFE_componentWillUpdate来避免警告）
  componentWillUpdate(){
    // 状态将要更新，获取到的Dom结构还是旧的，无法获取到最新的Dom
    console.log("componentWillUpdate", document.getElementById("num").innerHTML);
  }
  // 状态更新完成（接收两个参数，分别为上一次的props和上一次的state）
  // 可以根据preProps、preState来控制是否执行componentDidUpdate当中的代码
  // 避免运行过程中，每一次setState，都执行一次componentDidUpdate，造成其中的代码执行了n次
  componentDidUpdate(preProps, preState){
    // 状态更新完成，可以获取到最新的Dom结构
    if(preState.num === 1){
      console.log("componentDidUpdate", document.getElementById("num").innerHTML);
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>数值为：<span id='num'>{ this.state.num }</span></h1>
        <button onClick={() => { this.setState({ num: this.state.num + 1 }) }}>Add</button>
      </div>
    );
  }
}

export default App;