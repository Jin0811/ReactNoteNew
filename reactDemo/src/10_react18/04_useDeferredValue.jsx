/**
 * useDeferredValue
 * 此方法返回一个延迟响应的值，可以让一个state延迟生效，只有当前没有紧急更新时，该值才会变为最新值
 * useDeferredValue 和 useTransition 一样，都是标记了一次非紧急任务更新
 * 
 * 相同点：useDeferredValue 和 useTransition 本质上内部实现是一样的，都是标记了延迟更新的任务
 * 不同点：useTransition是把更新任务变成了延迟更新任务，useDeferredValue是把一个状态变成延迟的状态
 */

 import { useEffect, useState, useDeferredValue } from "react";

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

   return (
     <div style={{ padding: "20px" }}>
       <div>
         <input type="text" value={text} onChange={(e) => {
           setText(e.target.value);
           setSearch(e.target.value);
         }}/>
         <button>搜索</button>
         <hr />
         <List search={useDeferredValue(search)} />
       </div>
     </div>
   );
 };
 
 export default Demo;