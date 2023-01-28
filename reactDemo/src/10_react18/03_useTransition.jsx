/**
 * useTransition
 * React的状态更新分为两类：
 * - 紧急更新（Urgent Updates）
 *   比如打字、点击、拖动等，需要立即响应的行为，如果不立即响应会给人很卡顿的感觉
 * - 过渡更新（Transition Updates）
 *   将UI从一个视图过渡到另外一个视图，有些延迟，不立即响应是可以接受的
 * 
 * 并发模式只是提供了可中断的能力，默认情况下，所有的更新都是紧急更新
 * React提供了useTransition让我们手动指定哪些更新是紧急的，哪些是非紧急的
 */

import { useEffect, useState, useTransition } from "react";

const Item = (props) => <li>{ props.serial + "_" + props.search }</li>

const List = (props) => {
  // State
  const [list, setList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setList(new Array(5000).fill(""));
    }, 100);
  }, [props.search]);
  
  return (
    <ul>
      { list.map((item, index) => {
        return <Item key={index} serial={index} search={props.search}></Item>
      }) }
    </ul>
  );
};

const Demo = () => {
  // State
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  // isPending [Boolean] 任务是否正在等待
  // startTransition [Function] 标记优先级 
  const [isPending, startTransition] = useTransition();

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <input type="text" value={text} onChange={(e) => {
          setText(e.target.value);

          startTransition(() => {
            setSearch(e.target.value);
          });
        }}/>
        <button>搜索</button>
        <hr />
        <h2>任务等待状态：{ isPending + "" }</h2>
        <List search={search} />
      </div>
    </div>
  );
};

export default Demo;