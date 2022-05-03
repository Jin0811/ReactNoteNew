import React, { Component } from 'react';

import BetterScoll from "better-scroll";

const wrapperStyle = {
  height: "300px",
  border: "1px solid #ccc",
  margin: "20px 0px",
  width: "50%",
  overflow: "hidden"
};

class App extends Component {
  state = {
    list: []
  }

  queryData = () => {
    let list = [];
    for(let i=0; i<100; i++){
      list.push(i);
    }
    this.setState({ list }, () => {
      new BetterScoll(".wrapper");
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.queryData}>Click</button>
        <div className='wrapper' style={{ ...wrapperStyle }}>
          <ul className='content'>
            { this.state.list.map((item, index) => <li key={index}>{item}</li>) }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;