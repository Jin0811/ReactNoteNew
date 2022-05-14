import React, { Component } from 'react';

import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #f1f1f1;
  width: 50%;
  margin: 0px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px;
  p{
    margin: 0px;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <StyledFooter>
          <p>首页</p>
          <p>列表</p>
          <p>我的</p>
        </StyledFooter>
      </div>
    );
  }
}

export default App;

/**
 * 安装：npm i styled-components
 */