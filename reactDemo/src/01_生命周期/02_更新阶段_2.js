import React, { Component } from 'react';

class App extends Component {
  state = {
    name: "张三",
  };

  // 是否要进行更新
  shouldComponentUpdate(nextProps, nextState){
    // 这里还未进行更新，所以this.state获取到的是旧的state

    // 旧状态当中的name === 新状态中的name，则不进行更新
    if(this.state.name === nextState.name){
      return false;
    }

    // 旧状态当中的name !== 新状态中的name，则进行更新
    if(this.state.name !== nextState.name){
      return true;
    }

    // 如果state当中状态很多的话，可以直接对比新旧state的JSON字符串
    // JSON.stringify(this.state) === JSON.stringify(nextState)

    // 注意不要直接使用：this.state.name = "李四" 的方式去修改state
    // 这样做会造成两个后果：
    // 1、不能更新dom，页面显示的还是旧数据
    // 2、如果直接修改this.state，那在shouldComponentUpdate当中的JSON字符串对比就会失效，因为state当中的已经不是旧数据了
  }

  // 状态将要更新
  componentWillUpdate(){
    console.log("将要更新：componentWillUpdate");
  }
  // 组件更新完成
  componentDidUpdate(){
    console.log("更新完成：componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>数值为：<span id='name'>{ this.state.name }</span></h1>
        <button onClick={() => { this.setState({ name: "李四" }) }}>修改名称</button>
      </div>
    );
  }
}

export default App;

/**
 * 初始state当中的name为张三，点击按钮之后，修改了姓名为李四
 * 此时每次再点击按钮，虽然name的值没有改变，但是依旧会执行componentWillUpdate、render、componentDidUpdate
 * 这样就造成了性能的浪费，为了优化性能，可以使用shouldComponentUpdate钩子函数
 * 
 */