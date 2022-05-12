import React, { Component } from 'react';

import { Map } from "immutable";

class App extends Component {
  state = {
    info1: Map({
      name: "张三",
      age: 18,
    }),

    info2: {
      name: "张三",
      age: 18,
    }
  };

  change1 = () => {
    this.setState({
      info1: this.state.info1.set("name", "李四").set("age", 20)
    });
  };
  change2 = () => {
    let oldObj = Map(this.state.info2);
    let newObj = oldObj.set("name", "李四").set("age", 20);
    this.setState({ info2: newObj.toJS() });
  };

  render() {
    return (
      <div>
        <div>{ this.state.info1.get("name") } - { this.state.info1.get("age") }</div>
        <button onClick={this.change1}>修改1</button>

        <hr />

        <div>{ this.state.info2.name } - { this.state.info2.age }</div>
        <button onClick={this.change2}>修改2</button>

      </div>
    );
  }
}

export default App;

// let obj = {
//   name: "张三",
//   age: 18,
// };
// let oldObj = Map(obj);
// let newObj = oldObj.set("name", "李四");
// console.log(newObj.get("name")); // 获取值
// console.log(newObj.toJS()); // 转回普通JS对象