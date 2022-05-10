import React, { useEffect } from 'react';

// 引入connect，connect是一个高阶组件
import { connect } from "react-redux";

import { show, hide } from "../redux/actionCreater/TabBarActionCreater";

const Main = (props) => {
  
  let { show, hide } = this.props; // 解构出两个方法，这里，如果在useEffect使用props，会造成死循环
  useEffect(() => {
    hide();
    return () => {
      show();
    }
  }, [hide, show]);

  const handleBack = () => {
    props.history.goBack();
  }

  return (
    <div className='detail'>
      <h1>详情 - { props.match.params.id }</h1>
      <button style={{ marginTop: "20px"}} onClick={handleBack}>返回</button>
    </div>
  );
};

/**
 * connect()函数
 * 1、第一个参数：是一个回调函数，回调函数的返回值是对象，对象当中的键值对会传递给子组件
 *    回调函数接收一个形参state，代表的是store当中的state
 *    第一个参数如果不需要可以传递一个null
 * 2、第二个参数为：是一个对象，将来给子组件传递的回调函数
 *    这里将show和hide两个ActionCreater函数，放到了一个对象当中，作为connect的第二个参数
 *    子组件在调用 props.show 的时候，就会执行show这个方法
 *    show方法是一个ActionCreater，返回了一个action对象，connect会自动对这个action进行分发
 */
export default connect(null, { show, hide })(Main);