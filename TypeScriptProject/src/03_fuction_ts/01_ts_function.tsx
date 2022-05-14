import { useState } from "react";

const Demo = () => {
  // 这里，如果不显式进行声明，则会根据初始值的类型进行推断
  // const [name, setName] = useState("tom"); // 隐式
  const [name, setName] = useState<string>("tom"); // 显式

  const handleClick = () => {
    setName("jack");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{ name.toUpperCase() }</h2>
      <button onClick={handleClick}>修改</button>
    </div>
  );
};

export default Demo;