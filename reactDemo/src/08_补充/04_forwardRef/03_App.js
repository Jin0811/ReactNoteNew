
import React, { forwardRef, useRef, useState, useImperativeHandle } from "react";

const Father = () => {
  const myRef = useRef();

  const test = () => {
    console.log(myRef);
    myRef.current.sayName();
  };

  return (
    <div>
      <button onClick={test}>打印子组件</button>

      <Child ref={myRef}></Child>
    </div>
  );
};

const Child = forwardRef((props, ref) => {
  const [name] = useState("张三");

  // 暴露部分想要暴露的属性和方法给父组件
  useImperativeHandle(ref, () => {
    return {
      name,
      sayName,
    };
  });

  const sayName = () => {
    console.log(name, "子组件当中的sayName方法");
  };

  return (
    <div>
      子组件
    </div>
  );
});

export default Father;