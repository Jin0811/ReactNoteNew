import React, { Component } from 'react';

const ulStyle = {
  width: "200px",
  height: "200px",
  overflowY: "auto",
  backgroundColor: "#f1f1f1",
  listStyle: "none",
  padding: "10px"
};

class App extends Component {

  myRef = React.createRef();

  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate");
    let scrollHeight = this.myRef.current.scrollHeight;
    return scrollHeight;
  }

  // 状态和DOM都没有进行更新
  // componentWillUpdate(){
  //   console.log("componentWillUpdate");
  // }

  // 状态和DOM都更新完成
  componentDidUpdate(preProps, preState, value){
    console.log("componentDidUpdate", value);
    this.myRef.current.scrollTop = this.myRef.current.scrollTop + this.myRef.current.scrollHeight - value;
  }

  // 添加新邮件
  add = () => {
    let { list } = this.state;
    let maxItem = Math.max(...list);
    for(let i=maxItem+1; i<30; i++){
      list.unshift(i);
    }
    this.setState({ list: [...list] });
  }
  
  render() {
    console.log("render");
    let { list } = this.state;
    return (
      <div>
        <button onClick={this.add}>新邮件</button>
        <ul style={{ ...ulStyle }} ref={this.myRef}>
          { list.map(item => <li style={{ marginBottom: "10px", background: "#fff" }} key={item}>{ item }</li>) }
        </ul>
      </div>
    );
  }
}

export default App;

/**
 * 注意：16.2之前是没有问题的，但是16.2之后，就可能出现结果不准确的问题，因为引入了Fiber技术
 * componentWillUpdate -> render -> componentDidUpdate
 * render -> getSnapshotBeforeUpdate -> componentDidUpdate
 * 
 * 从上面可以看出，componentWillUpdate是在render之前被调用的
 * 这就导致一个问题，别的异步任务或者用户的操作，会导致再次进行render
 * 一旦进行render，那componentWillUpdate当中记录的一些DOM就可能发生改变，导致了这个记录有可能不准确
 * 
 * 而getSnapshotBeforeUpdate，是在render之后，componentDidUpdate之前被调用的
 * 此时已经render完成，虚拟DOM还在内存当中，还未真正挂载，即将要挂载，这个时候获取一个快照是准确的，获取快照完成，立即就进行了挂载，触发了componentDidUpdate
 * 
 * 
 * getSnapshotBeforeUpdate的返回值，会传递给componentDidUpdate的第三个参数
 */