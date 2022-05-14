import React, { Component } from 'react';

interface stateInterface{
  text: string,
  list: string[]
}
class componentName extends Component<any, stateInterface> {
  myRef = React.createRef<HTMLInputElement>();

  state = {
    text: "",
    list: []
  };

  handleClick = () => {
    let value = (this.myRef.current as HTMLInputElement).value; // 因为这个current不一定存在，所以进行断言
    this.setState({ list: [...this.state.list, value] });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        {/* <input type="text" value={this.state.text} onChange={(event) => { this.setState({ text: event.target.value }) }} /> */}

        <input ref={this.myRef} type="text" />
        <button onClick={this.handleClick}>添加</button>

        <ul style={{ listStyle: "none" }}>
          { this.state.list.map((item, index) => <li key={index}>{ item }</li>) }
        </ul>
      </div>
    );
  }
}

export default componentName;