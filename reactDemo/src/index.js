import React from "react";
import ReactDOM from "react-dom";

// import App from "./0_base/01_class组件";
// import App from "./0_base/02_函数式组件";
// import App from "./0_base/03_组件嵌套";
// import App from "./0_base/04_组件的样式";
// import App from "./0_base/05_事件处理";
// import App from "./0_base/06_ref使用";
// import App from "./0_base/07_条件渲染";
// import App from "./0_base/08_富文本展示";
// import App from "./0_base/09_选项卡";
// import App from "./0_base/10_setState同步异步";
// import App from "./0_base/11_betterScroll";
// import App from "./0_base/12_context";
// import App from "./0_base/13_插槽";

// import App from "./01_生命周期/01_初始化";
// import App from "./01_生命周期/02_更新阶段_1";
// import App from "./01_生命周期/02_更新阶段_2";
// import App from "./01_生命周期/02_更新阶段案例_3";
// import App from "./01_生命周期/03_componentWillReceiveProps_1";
// import App from "./01_生命周期/03_componentWillReceiveProps_2";
// import App from "./01_生命周期/04_销毁阶段";

// import App from "./01_生命周期/05_getDeriveStateFromProps";
// import App from "./01_生命周期/05_1_对比1";
// import App from "./01_生命周期/05_1_对比2";
// import App from "./01_生命周期/06_getSnapshotBeforeUpdate";

// 路由
// import App from "./03_Router/App";

// Redux
import App from "./04_Redux/App";


// JSX写法
// ReactDOM.render((
//   <div id="test">这里是内容</div>
// ), document.getElementById("root"));

// 替代写法
// 平常开发当中可以直接写jsx，Babel的jsx编译器会帮助我们将jsx转换成下面的样子
// 流程：JSX -> 使用react创建组件，babel进行编译 -> JavaScript对象 -> ReactDOM.render -> DOM元素 -> 插入到页面
// ReactDOM.render(React.createElement("div", { id: "test" }, "这里是内容"), document.getElementById("root"));


ReactDOM.render(<App></App>, document.getElementById("root"));