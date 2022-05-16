import React, { Component, forwardRef } from 'react';

class App extends Component {
  myText = React.createRef();

  handleClick = () => {
    console.log(this.myText);
    this.myText.current.value = "";
    this.myText.current.focus();
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <button onClick={this.handleClick}>获取焦点</button>
        <Child ref={this.myText}></Child>
      </div>
    );
  }
}

const Child = forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default App;


/**
 * forwardRef 引用传递，是一种通过组件向子组件自动传递引用ref的技术，可以透传多层
 * 
 * 缺点：只能透传一个，如果要传递多个，还是需要使用原先的方式
 */