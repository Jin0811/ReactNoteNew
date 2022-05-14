import { useRef, useState } from "react";

const Demo = () => {

  const myRef = useRef<HTMLInputElement>(null);
  const [list, setList] = useState<string[]>([]);

  const handleClick = () => {
    // let value = myRef.current?.value; // 使用可选链操作符
    let value = (myRef.current as HTMLInputElement).value; // 利用断言
    setList([ ...list, value ]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <input ref={myRef} type="text" />
      <button onClick={handleClick}>添加</button>

      <ul style={{ listStyle: "none" }}>
        { list.map((item, index) => <li key={index}>{ item }</li>) }
      </ul>
    </div>
  );
};

export default Demo;