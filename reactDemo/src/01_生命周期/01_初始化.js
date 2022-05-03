import React, { Component } from 'react';

class App extends Component {
  state = {
    name: "张三"
  };

  // 将要挂载（整个生命周期只执行一次）
  // 可以访问、修改state当中的数据，作用类似于vue的created钩子
  // 这里无法获取到DOM结构
  componentWillMount(){
    console.log("componentWillMount");
    this.setState({ name: "李四" });
    console.log(document.getElementById("name")); // null 无法拿到DOM结构
  }

  // 挂载完成（整个生命周期只执行一次）
  // 可以访问、修改state当中的数据
  // 可以获取到最新的、挂载完成的Dom结构
  componentDidMount(){
    console.log("componentDidMount");
    console.log(document.getElementById("name")); // <h1 id='name'>李四</h1>
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1 id='name'>{ this.state.name }</h1>
      </div>
    );
  }
}

export default App;


/**
 * 文档
 * ---------------------------------------------------------------------------------------------------------------------------------
 * 
 * 初始化阶段：
 * componentWillMount：render之前最后一次修改状态的机会
 * render：只能访问this.props和this.state，不允许修改state和Dom
 * componentDidMount：render成功并且渲染真实Dom成功，可以在此钩子中操作Dom（订阅、数据请求、setInterval）
 * 
 * 注意：
 * 1 componentWillMount
 *  1.1 在16.2之前可以正常使用，不会警告
 *  1.2 在16.2以后，react不推荐使用componentWillMount，使用时会在控制台打印警告
 *      可以使用UNSAFE_componentWillMount来解决警告
 *  1.3 React 16.2之后，react使用Fiber技术优化了Diff对比算法，componentWillMount是属于低优先级的，有可能会打断，被放到下次再执行，可能会执行多次
 * 
 * ---------------------------------------------------------------------------------------------------------------------------------
 * 
 * 运行中阶段：
 * componentWillReceiveProps：父组件修改属性触发
 * shouldComponentUpdate：是一个阀门，默认返回true，返回false会阻止render的调用
 * componentWillUpdate：组件将要进行更新，这里不能修改props和state
 * render：只能访问this.props和this.state，不允许修改state和Dom
 * componentDidUpdate：组件更新完成，可以操作Dom，接收两个参数，分别为上一次的props和上一次的state
 * 
 * 注意：
 * 1 componentWillUpdate
 *  1.1 在16.2之前可以正常使用，不会警告
 *  1.2 在16.2以后，react不推荐使用componentWillUpdate，使用时会在控制台打印警告
 *      可以使用UNSAFE_componentWillUpdate来解决警告
 * 
 * ---------------------------------------------------------------------------------------------------------------------------------
 * 
 * 销毁阶段
 * componentWillUnmount：组件将要卸载，在删除组件之前进行清理操作，比如计时器和事件监听器
 * 
 * ---------------------------------------------------------------------------------------------------------------------------------
 */