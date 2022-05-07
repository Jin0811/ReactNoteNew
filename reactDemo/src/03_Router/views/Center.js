import React, { Component } from 'react';

class Main extends Component {

  handleClick = () => {
    console.log(this.props);
    /**
     * 这里拿不到props.history
     * 解决方法：
     * 1、在定义路由时，向Center组件传递render的参数props
     * 2、使用withRouter
     */
  }

  render() {
    return (
      <div className='center'>
        <h2>Center</h2>
        <button onClick={this.handleClick}>电影订单</button>
      </div>
    );
  }
}

export default Main;