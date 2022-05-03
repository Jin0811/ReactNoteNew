import React, { Component } from 'react';

class App extends Component {
  state = {
    show: true,
  };

  render() {
    let { show } = this.state;
    return (
      <div>
        <h1>父组件</h1>
        <button onClick={() => { this.setState({ show: !show }) }}>显示或隐藏子组件</button>
        { show && <Child></Child> }
      </div>
    );
  }
}

class Child extends Component {

  componentDidMount(){
    this.timer = setInterval(() => {
      console.log(Date.now());
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timer); // 将要卸载组件，执行清理工作
  }

  render() {
    return (
      <div>
        <h2>子组件</h2>
      </div>
    );
  }
}

export default App;