import React, { Component } from 'react';

const GlobalContext = React.createContext(); // context

class App extends Component {
  state = {
    num: 0,
  };

  render() {
    const contextValue = {
      num: this.state.num,
      changeNum: (num) => {
        this.setState({ num: num });
      },
    };
    return (
      <div>
        <GlobalContext.Provider value={contextValue}>
          <ChildOne></ChildOne>
          <ChildTwo></ChildTwo>
        </GlobalContext.Provider>
      </div>
    );
  }
}


class ChildOne extends Component {
  render(){
    return (
      <div>
        <h2>组件一</h2>
        <GlobalContext.Consumer>
          {
            (contextValue) => {
              return <button onClick={() => { contextValue.changeNum(contextValue.num + 1) }}>修改Num</button>
            }
          }
        </GlobalContext.Consumer>
      </div>
    );
  }
}

class ChildTwo extends Component {
  // 写法参考react文档：https://react.docschina.org/docs/context.html#when-to-use-context
  // 指定 contextType 读取当前的 GlobalContext
  // React 会往上找到最近的 GlobalContext Provider，然后使用它的值
  static contextType = GlobalContext;
  render(){
    return (
      <div>
        <h2>组件二</h2>
        <p>Num的值为：{ this.context.num }</p>
      </div>
    );
  }
}

export default App;