import React, { useEffect } from 'react';

import store from "../redux/store";
import { show, hide } from "../redux/actionCreater/TabBarActionCreater";

const Main = (props) => {
  useEffect(() => {
    // 创建 - 进行发布
    // store.dispatch({ type: "hide" });
    store.dispatch(hide()); // 使用actionCreater
    
    return () => {
      // 销毁 - 进行发布
      // store.dispatch({ type: "show" });
      store.dispatch(show()); // 使用actionCreater
    };
  }, []);

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

export default Main;