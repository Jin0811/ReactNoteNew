import React, { useEffect } from 'react';

const Main = (props) => {
  useEffect(() => {
    // 创建

    return () => {
      // 销毁
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