import React, { Component, memo } from 'react';

class App extends Component {
  state = {
    num1: 0,
    num2: 0,
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Father</h1>
        <h1>num1：{ this.state.num1 }</h1>
        <h1>num2：{ this.state.num2 }</h1>

        {/* 这里，num1跟Child组件并无关联，但是父组件每次更新num1的值，都会导致Child组件重复运行，此时就可以使用memo来包裹子组件 */}
        <button onClick={() => { this.setState({ num1: this.state.num1 + 1 }); }}>修改num1</button>

        {/* 这里，num2是传递给了Child组件，当父组件更新num2时，则会触发子组件的渲染 */}
        <button onClick={() => { this.setState({ num2: this.state.num2 + 10 }); }}>修改num2</button>

        <hr />
        <Child num2={this.state.num2}></Child>
      </div>
    );
  }
}

const Child = memo((props) => {
  console.log("Child执行了");

  return (
    <div>
      <h2>Child - {props.num2}</h2>
    </div>
  );
});

export default App;