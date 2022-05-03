import React, { Component } from 'react';

/**
 * 1 字符串形式
 * <input type="text" ref="myText" />
 * console.log(this.refs.myText);
 * 
 * 2 createRef
 * myRef = React.createRef();
 * <input type="text" ref={this.myRef} />
 * console.log(this.myRef);
 */

class App extends Component {
  myRef = React.createRef();

  handleClick1 = () => {
    console.log(this.refs.myText);
  }

  handleClick2 = () => {
    console.log(this.myRef);
  }

  render() {
    return (
      <div>
        <h1>Ref使用</h1>

        {/* 字符串形式 */}
        <input type="text" ref="myText" />
        <button onClick={this.handleClick1}>添加</button>

        <hr />

        {/* createRef */}
        <input type="text" ref={this.myRef} />
        <button onClick={this.handleClick2}>添加</button>

      </div>
    );
  }
}

export default App;