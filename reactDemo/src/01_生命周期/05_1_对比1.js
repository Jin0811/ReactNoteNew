import React, { Component } from 'react';

class App extends Component {
  state = {
    type: 1,
    num: 10,
  };

  handleClick = (type) => {
    this.setState({ type });

    // 这里，num这个状态跟子组件并没有任何关联，但是更新num，依旧会触发子组件的componentWillReceiveProps
    // 假如子组件，在componentWillReceiveProps发起了请求，可能请求结果还未返回，
    // 但是这里1秒钟之后，又触发了componentWillReceiveProps，这就造成了不必要的请求

    // 并且更为严重的是，如果多次点击按钮，则父组件多次更新state，这样就触发了很多次子组件的componentWillReceiveProps
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
    list: []
  };

  componentDidMount(){
    this.queryList(this.props.type);
  }
  componentWillReceiveProps(nextProps){
    // componentWillReceiveProps外部组件多次频繁更新传入不同的props，会导致不必要的异步请求
    this.queryList(nextProps.type);
  }
  // 查询数据（发送请求）
  queryList = (type) => {
    console.log("进行了请求");
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