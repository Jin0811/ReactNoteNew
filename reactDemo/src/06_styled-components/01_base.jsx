import React, { Component } from 'react';

import styled from "styled-components";

// const StyledFooter = styled.footer``; 这种函数后面跟模板字符串的语法，称为标签模板
// 模板字符串可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串，这被称为“标签模板”功能（tagged template）
// 参考：https://es6.ruanyifeng.com/#docs/string
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