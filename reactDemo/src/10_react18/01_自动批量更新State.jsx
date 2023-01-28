/**
 * React18默认开启批处理来实现性能提升
 * React17原先只支持React事件处理函数内部的批处理
 * 
 * React18支持批处理：
 * - React事件处理函数
 * - Promise
 * - setTimeout
 * - 原生事件处理（addEventListener添加的原生事件）
 * 
 * 17当中，在promise setTimeout里面进行状态的更新，并不会进行合并批处理，而是会进行多次render，性能并不好，18当中优化了此问题
 * 
 * 某些特殊情况下，可能不需要进行批处理，此时可以借助 flushSync 来禁用自动批量处理更新
 * 一个flushSync里面写多个setState是没有意义的，多个state会进行合并，一般来说一个flushSync里面只能写一个setState
 */

import { useState } from "react";
import { flushSync } from "react-dom";

const Demo = () => {

  // State
  const [name, setName] = useState("张三");
  const [age, setAge] = useState(18);

  // 修改数据
  const changeData = () => {
    // React18默认开启批量处理
    // setTimeout(() => {
    //   setName("李四");
    //   setAge(20);
    // }, 500);

    // 借助 flushSync 来禁用自动批量处理更新
    setTimeout(() => {
      flushSync(() => { setName("李四"); });
      flushSync(() => { setAge(20); });
    }, 500);
  };

  console.log("进行了render");

  return (
    <div>
      <h1>{ name } - { age }</h1>
      <button onClick={changeData}>更新数据</button>
    </div>
  );
};

export default Demo;