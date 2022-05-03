import React, { Component } from 'react';

class App extends Component {
  state = {
    num: 1,
  };

  render() {
    return (
      <div>
        <h1>父组件 - { this.state.num }</h1>
        <button onClick={() => { this.setState({ num: this.state.num + 1 }) }}>修改num</button>
        <hr />
        <Child num={this.state.num}></Child>
      </div>
    );
  }
}

class Child extends Component {

  // 接受一个nextProps参数，为最新的，父组件传递过来的props
  componentWillReceiveProps(nextProps){
    console.log("子组件：componentWillReceiveProps", nextProps);
  }

  render(){
    return (
      <div>
        <h2>子组件 - { this.props.num }</h2>
      </div>
    );
  }
}

export default App;

/**
 * 注意：
 * 1 第一次传递props，不会触发componentWillReceiveProps钩子
 * 1 即使父组件不传递任何属性给子组件，当父组件更新state时，依旧会触发子组件的componentWillReceiveProps
 */