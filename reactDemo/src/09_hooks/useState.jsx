import { useState } from "react";

const Demo = (props) => {
  
  // State
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState(() => {
    return {
      name: props.name || "匿名",
    }
  });

  // Methods
  const updateCount = () => {
    setCount(1);
  };

  console.log("进行了渲染");

  return (
    <div>
      <h1>{ userInfo.name }</h1>
      <h1>{ count }</h1>
      <br />
      <button onClick={updateCount}>更新count</button>
    </div>
  );
};

export default Demo;

/**
 * 更新state数据的两种方式：
 * setState(state + 1);
 * setState((preState) => { return state + 1; });
 * 
 * 1、惰性state：initialState 参数只会在初始化时起作用，后续渲染时会被忽略
 * 2、复杂state：初始化state如果需要复杂的计算来获得，则可以传入一个函数，在函数中计算并返回初始值的state
 * 
 * 如果更新的数据与上一次的一样，React将跳过子组件的渲染及effect的执行
 * 按照上面的说法，点击两次更新count按钮时，只会进行一次console，但是这里会进行两次console，点击两次以上，则不会再进行console
 * 原因可查看文档：https://zh-hans.reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update
 */