import React, { Component } from 'react';

class App extends Component {
  state = {
    type: 1,
    num: 10,
  };

  handleClick = (type) => {
    this.setState({ type });

    setTimeout(() => {
      this.setState({ num: this.state.num + 1 });
    }, 1000);
  }

  render() {
    let { type } = this.state;
    return (
      <div>
        <button style={{ color: type === 1 ? "royalblue" : "black" }} onClick={() => this.handleClick(1)}>正在热映</button>
        <button style={{ color: type === 2 ? "royalblue" : "black" }} onClick={() => this.handleClick(2)}>即将热映</button>
        <List type={this.state.type}></List>
      </div>
    );
  }
}

class List extends Component {
  state = {
    list: [],
    type: null,
  };

  componentDidMount(){
    this.queryList();
  }

  static getDerivedStateFromProps(nextProps, nextState){
    return {
      type: nextProps.type,
    }
  }

  componentDidUpdate(preProps, preState){
    // console.log(this.state.type); // 这里拿到的type，就是经过了getDerivedStateFromProps处理之后的，最新的type

    // 如果父组件当中，连续多次点击按钮，更新状态，则最新的type和上一次的type相同，直接return了，就不会重复执行下面的请求了

    // 注意：这里如果不进行判断的话，会造成死循环，因为queryList方法当中，进行了当前组件的list状态更新，更新完成之后，又会触发componentDidUpdate
    // componentDidUpdate当中又开始调用queryList，造成死循环
    if(this.state.type === preState.type){
      return;
    }else{
      this.queryList();
    }
  }
  
  // 查询数据（发送请求）
  queryList = () => {
    console.log("进行了请求");
    let { type } = this.state;
    let arr = [];
    for(let i=0; i<10; i++){
      arr.push({ id: i, name: `${type === 1 ? '热映电影' : '即将热映'}${i}` });
    }
    this.setState({ list: [...arr] });
  }

  render(){
    let { list } = this.state;
    return (
      <div>
        <ul>
          { list.map((item, index) => <li key={index}>{ item.name }</li>) }
        </ul>
      </div>
    );
  }
}

export default App;