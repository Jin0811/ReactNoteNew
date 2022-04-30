import React from "react";
import ReactDOM from "react-dom";

// import App from "./0_base/01_class组件";
// import App from "./0_base/02_函数式组件";
// import App from "./0_base/03_组件嵌套";
import App from "./0_base/04_组件的样式";

// JSX写法
// ReactDOM.render((
//   <div id="test">这里是内容</div>
// ), document.getElementById("root"));

// 替代写法
// 平常开发当中可以直接写jsx，Babel的jsx编译器会帮助我们将jsx转换成下面的样子
// 流程：JSX -> 使用react创建组件，babel进行编译 -> JavaScript对象 -> ReactDOM.render -> DOM元素 -> 插入到页面
// ReactDOM.render(React.createElement("div", { id: "test" }, "这里是内容"), document.getElementById("root"));


ReactDOM.render(<App></App>, document.getElementById("root"));