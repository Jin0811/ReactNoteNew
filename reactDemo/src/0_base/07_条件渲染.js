import React, { Component } from 'react';

import "./css/style_07.scss";

class App extends Component {
  state = {
    show: false,
  }

  render() {
    return (
      <div className='style_07'>
        <button onClick={ () => { this.setState({ show: !this.state.show }) } }>条件渲染</button>

        { this.state.show && <div>使用三目表达式、使用或运算符，类似于vue中的v-if</div> }
        <hr/>

        { <div className={ this.state.show ? '' : 'hidden' }>动态添加className，使用display来控制元素显示和隐藏，与vue的v-show类似</div> }

      </div>
    );
  }
}

export default App;

/**
 * react当中有两种条件渲染：
 * 1 使用三目表达式、使用或运算符，类似于vue中的v-if
 * { Boolean ? <div>内容</div> : "" }
 * { Boolean && <div>内容</div> }
 * 
 * 2 动态添加className，使用display来控制元素显示和隐藏，与vue的v-show类似
 * <div className={ Boolean ? 'hidden' : '' }>内容</div>
 */