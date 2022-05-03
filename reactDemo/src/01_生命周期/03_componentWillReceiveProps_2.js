import React, { Component } from 'react';

class App extends Component {
  state = {
    type: 1,
  };

  render() {
    let { type } = this.state;
    return (
      <div>
        <button style={{ color: type === 1 ? "royalblue" : "black" }} onClick={() => { this.setState({ type: 1 }) }}>正在热映</button>
        <button style={{ color: type === 2 ? "royalblue" : "black" }} onClick={() => { this.setState({ type: 2 }) }}>即将热映</button>
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
    // 这里可能会出现多次请求的问题
    // 因为父组件任何的状态更新都会触发子组件的componentWillReceiveProps
    // 这样可能上一个请求还未完成，又进行了新的请求
    this.queryList(nextProps.type);
  }
  // 查询数据（发送请求）
  queryList = (type) => {
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