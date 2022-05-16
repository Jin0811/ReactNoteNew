import React, { Component } from 'react';

class App extends Component {
  childInputRef = null;

  handleClick = () => {
    this.childInputRef.current.value = "";
    this.childInputRef.current.focus();
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <button onClick={this.handleClick}>获取焦点</button>
        <Child callback={ (el) => { this.childInputRef = el; } }></Child>
      </div>
    );
  }
}

class Child extends Component {
  myText = React.createRef();

  componentDidMount(){
    this.props.callback(this.myText);
  }
  render() {
    return (
      <div>
        <input ref={this.myText} type="text" />
      </div>
    );
  }
}

export default App;