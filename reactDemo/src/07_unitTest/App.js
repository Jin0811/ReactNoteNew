import React, { Component } from 'react';

class App extends Component {
  state = {
    text: "",
    list: ["111", "222", "333"]
  };

  handleAdd = () => {
    const { list, text } = this.state;
    this.setState({ list: [...list, text] });
  };
  handleDel = (index) => {
    let tempList = [...this.state.list];
    tempList.splice(index, 1);
    this.setState({ list: [...tempList] });
  };

  render() {
    const { list, text } = this.state;
    return (
      <div style={{ padding: "20px" }}>
        <h1>Todo</h1>

        <input type="text" value={text} onChange={(event) => { this.setState({ text: event.target.value }) }} />
        <button className='add' onClick={this.handleAdd}>add</button>

        <ul>
          { list.map((item, index) => <li key={item}>
            <span>{ item }</span>
            <button className='del' onClick={() => { this.handleDel(index) }}>del</button>
          </li>) }
        </ul>
      </div>
    );
  }
}

export default App;

/**
 * 安装react官方单元测试库：npm install react-test-renderer
 * 
 * 安装第三方单元测试库：npm install enzyme
 * 安装适配器：npm i "@wojtekmaj/enzyme-adapter-react-17"
 * 
 * 测试用例的文件后缀必须为：xxx.test.js
 * 只有符合命名格式的文件才会在执行npm test时才会扫描到并且执行
 */