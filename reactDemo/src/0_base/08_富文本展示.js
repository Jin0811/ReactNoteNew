import React, { Component } from 'react';

class componentName extends Component {
  state = {
    htmlStr: "<h1>渲染HTML字符串为标签</h1>"
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.state.htmlStr }}></div>
      </div>
    );
  }
}

export default componentName;

/**
 * 渲染HTML字符串为标签
 * 语法：<div dangerouslySetInnerHTML={{ __html: "<h1>HTML字符串</h1>" }}></div>
 */