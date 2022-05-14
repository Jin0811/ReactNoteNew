import React, { Component } from 'react';

import styled, { keyframes } from "styled-components";

class App extends Component {
  render() {
    const myAnimation = keyframes`
      from{
        transform: rotate(0deg);
      }
      to{
        transform: rotate(360deg);
      }
    `;
    const StyledDiv = styled.div`
      width: 50px;
      height: 50px;
      background: #f56c6c;
      margin: 50px;
      animation: ${myAnimation} 4s infinite linear;
    `;

    return (
      <div style={{ padding: "20px" }}>
        <StyledDiv></StyledDiv>
      </div>
    );
  }
}

export default App;