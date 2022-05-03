import React, { Component } from 'react';

class App extends Component {
  state = {
    list: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    currentId: "1",
  };

  render() {
    let { list, currentId } = this.state;
    return (
      <div>
        <input type="text" onChange={(event) => { this.setState({ currentId: event.target.value }) }} />

        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
          { list.map(item => <Box key={item} currentId={currentId} boxId={item}></Box>) }
        </div>
      </div>
    );
  }
}

class Box extends Component {

  // 是否要进行更新
  shouldComponentUpdate(nextProps, nextState){
    // 初始时：currentId = 1

    //              currentId           boxId
    // 第一个组件：   1                   1
    // 第二个组件：   1                   2
    // 第三个组件：   1                   3

    // 此时更新状态：currentId = 2

    //              currentId           boxId
    // 第一个组件：   1 => 2               1  render
    // 第二个组件：   1 => 2               2  render
    // 第三个组件：   1 => 2               3

    // this.props.currentId === nextProps.boxId 第一个组件：旧的currentId等于了此组件的boxId，说明是上次选中的，这次取消了选中
    // nextProps.currentId === nextProps.boxId  第二个组件，新的currentId等于了此组件的boxId，说明是本次选中的
    if(this.props.currentId === nextProps.boxId || nextProps.currentId === nextProps.boxId){
      return true;
    }
    return false;

    // 每次都只render两个组件，即取消选择的组件、进行选中的组件
    // 这样其他未进行操作的组件，就不会进行不必要的render了
  }

  render(){
    console.log("Box组件进行了render");

    // currentId为当前选中的id
    // boxId为此组件的id
    let { currentId, boxId } = this.props;
    let borderStyle = currentId === boxId ? "1px solid red" : "1px solid #ccc";
    let boxStyle = {
      border: borderStyle,
      width: "200px",
      height: "200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0px 10px 10px 0px"
    };
    return (
      <div style={{ ...boxStyle }}>
        <h1>盒子ID：{ boxId }</h1>
      </div>
    );
  }
}

export default App;
