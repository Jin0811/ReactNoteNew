import React, { Component } from 'react';

import styled from "styled-components";

class App extends Component {
  render() {
    const StyledButton = styled.button`
      width: 98px;
      height: 36px;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 0px 8px;
      &:hover{
        cursor: pointer;
      }
    `;

    const StyledButtonDanger = styled(StyledButton)`
      border: 1px solid #f56c6c;
      background: #f56c6c;
      color: #fff;
    `;

    return (
      <div style={{ padding: "20px" }}>
        <StyledButton>普通按钮</StyledButton>
        <StyledButtonDanger>危险按钮</StyledButtonDanger>
      </div>
    );
  }
}

export default App;