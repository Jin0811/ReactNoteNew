import React, { Component } from 'react';

class App extends Component {

  handleClick1(){
    console.log(this);
  }
  handleClick2 = () => {
    console.log(this);
  }

  render() {
    return (
      <div>
        <h1>事件处理</h1>
        <input type="text" />

        {/* 这里handleClick是被react的事件系统调用的，不是被当前组件实例，所以丢失了this */}
        <button onClick={ this.handleClick1 }>添加1</button>

        {/* 这里的handleClick1虽然是被react事件系统调用的，但是handleClick1是一个箭头函数，this在创建时就已经确定了 */}
        <button onClick={ this.handleClick2 }>添加2</button>
      </div>
    );
  }
}

export default App;

/**
 * react当中的事件绑定和原生的事件绑定有什么区别？
 * react并不会真正地将事件绑定到每一个具体的元素上，而是采用了事件代理的模式，涉及到事件冒泡，内存暂用较小，性能好
 * 原生的事件绑定把事件绑定在每一个具体的元素上，比较消耗性能
 */