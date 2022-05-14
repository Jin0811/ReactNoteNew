import React from 'react';

const Parent = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>父组件</h2>
      <Child name="张三" func={() => { console.log("张三"); }}></Child>
      <ChildTwo name="李四"></ChildTwo>
    </div>
  );
};

interface propsInterface {
  name: string,
  func?: () => void, // 接收函数
}
// 约束接收到的props
const Child = (props:propsInterface) => {
  return (
    <div>
      <h2 onClick={props.func}>子组件 - { props.name }</h2>
    </div>
  );
};

// 另外一种写法（推荐上面的写法，比较方便简洁）
const ChildTwo:React.FC<propsInterface> = (props) => {
  return (
    <div>
      <h2 onClick={props.func}>子组件 - { props.name }</h2>
    </div>
  );
};

export default Parent;