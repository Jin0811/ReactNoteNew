import React, { Component } from 'react';

import styled from "styled-components";

const StyledInput = styled.input`
  outline: none;
  border-radius: 4px;
  border: 1px solid #409eff;
  padding: 0px 5px;
`;

const StyledDiv = styled.div`
  width: 200px;
  height: 100px;
  background: ${props => props.bgc || '#f1f1f1'};
  margin-top: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <StyledInput placeholder='请输入'></StyledInput>

        <StyledDiv>不传递参数</StyledDiv>
        <StyledDiv bgc="#409eff">#409eff</StyledDiv>
        <StyledDiv bgc="#67c23a">#67c23a</StyledDiv>
      </div>
    );
  }
}

export default App;