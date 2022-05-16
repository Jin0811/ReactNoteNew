import React, { Component } from 'react';

import { createPortal } from "react-dom";

import "./Dialog.scss";

class Dialog extends Component {

  render() {
    return createPortal((
      <div className='my-dialog'>

      </div>
    ), document.body);
  }
}

export default Dialog;

/**
 * createPortal 需要从react-dom当中引入
 * 
 * 语法：
 * createPortal(JSX, Node);
 * 参数JSX：需要渲染的DOM结构
 * 参数Node：挂载的节点
 * 
 * Portal提供了一种可以将jsx渲染到其他节点上的功能
 * 
 * 注意：Portal虽然将DOM渲染到了父节点之外，或者根节点之外，但是事件冒泡还是会冒泡到父节点和根节点上
 */