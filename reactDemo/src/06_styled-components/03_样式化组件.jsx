import React, { Component } from 'react';

import styled from "styled-components";

class App extends Component {
  render() {
    const StyledChild = styled(Child)`
      background: #f1f1f1;
      padding: 10px;
    `;

    return (
      <div style={{ padding: "20px" }}>
        <StyledChild></StyledChild>
      </div>
    );
  }
}

const Child = (props) => {
  return (
    <div className={props.className}>
      Child
    </div>
  );
};

export default App;