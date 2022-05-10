import React, { useEffect } from 'react';


const NotFound = (props) => {

  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <div className='not-found'>
      <h1>404</h1>
    </div>
  );
};

// 创建一个自定义的Connect方法
function myConnect(callBack, obj){
  let value = callBack();
  return (MyComponent) => {
    return (props) => {
      console.log(props);
      return (
        // 这里返回的是一个新的函数式组件，路由渲染的也是这个组件
        // 这样就导致了NotFound组件丢失了一些路由参数和方法
        // 可以同返回的这个函数式组件当中获取到props，再传递给子组件
        <div style={{ color: "red" }}>
          <MyComponent { ...value } { ...props } { ...obj }></MyComponent>
        </div>
      );
    };
  }
}

export default myConnect(() => {
  return { test: "aaaaa" }
}, { aFunc(){} })(NotFound);

/**
 * react-redux底层原理
 * 本质是使用高阶组件HOC
 * 
 * HOC不仅仅只是一个方法，确切地说HOC应该是一个组件工厂，获取低阶组件，生成高阶组件
 * 1、代码复用、代码模块化
 * 2、增删改props
 * 3、渲染劫持
 */