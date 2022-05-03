import React, { Component } from 'react';

class App extends Component {

  state = {
    count1: 0,
    count2: 0,
  }

  handleClick1 = () => {
    // 同步的逻辑当中，多次调用setState
    this.setState({ count1: this.state.count1 + 1 });

    this.setState({ count1: this.state.count1 + 1 });
    
    this.setState({ count1: this.state.count1 + 1 });
  }
  handleClick2 = () => {
    setTimeout(() => {
      this.setState({ count2: this.state.count2 + 1 });

      this.setState({ count2: this.state.count2 + 1 });
      
      this.setState({ count2: this.state.count2 + 1 });
    }, 0);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>按钮一</button>
        <h2>{ this.state.count1 }</h2>
        <hr />

        <button onClick={this.handleClick2}>按钮二</button>
        <h2>{ this.state.count2 }</h2>
      </div>
    );
  }
}

export default App;

/**
 * 在同步的逻辑当中：setState异步更新状态，异步更新真实DOM（会将多次的setState进行合并，再执行）
 * 
 * 在异步的逻辑当中：setState同步更新状态，同步更新真实DOM
 * 
 * setState接收第二个参数，是一个回调函数，在这个回调函数当中，可以获取到更新之后的state和真实dom
 */