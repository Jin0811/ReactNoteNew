import React, { Component } from 'react';

class App extends Component {
  state = {
    name: "tom"
  };
  
  // nextProps、nextState分别为最新的props和state
  static getDerivedStateFromProps(nextProps, nextState){
    console.log("getDerivedStateFromProps");
    return {
      name: nextState.name.toUpperCase()
    };
  }

  render() {
    return (
      <div>
        <h1>父组件 - { this.state.name }</h1>
        <hr />
        <Child></Child>
      </div>
    );
  }
}

class Child extends Component {

  render() {
    return (
      <div>
        <h2>子组件</h2>
      </div>
    );
  }
}

export default App;


/**
 * getDerivedStateFromProps触发时机：第一次初始化组件、后续的更新过程中（包括自身状态更新和父传子）
 * 返回一个对象会合并覆盖原有的state，返回null则说明不需要在这里更新state
 * 
 * 1 getDerivedStateFromProps是静态方法，内部不能使用this
 * 2 getDerivedStateFromProps在初始化时，作用与componentWillMount类似，是render之前最后一次修改状态的机会
 * 3 getDerivedStateFromProps和UNSAFE_componentWillReceiveProps不能共存
 * 4 getDerivedStateFromProps一般和componentDidUpdate搭配使用
 */