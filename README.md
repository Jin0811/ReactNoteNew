# React Note

## 1 环境搭建
- 全局安装react：`npm install -g create-react-app`
- 创建react项目：`create-react-app demo`
- 如果不想全局安装，可以使用npx来创建项目：`npx create-react-app demo`

## 2 CSS模块化
- 1 创建：`test.module.css`
- 2 引入：`import style from "./test.module.css"`
- 3 使用CSS文件中的 'test' CSS样式类：`<div className={style.test}></div>`

注意：
  - CSS文件命名方式为：`fileName.module.css`
  - 如果想在CSS模块当中定义一个全局的样式，可以使用 `:global()` 来实现
    ```css
    .test{
      color: red;
    }
    :global(.global-test){
      color: blue;
    }
    ```
    如上所示，虽然这个CSS文件是一个module，但是其中的 `.global-test` 依旧会影响全局，因为使用了`:global()`

## 3 Redux 
### 3.1 Redux设计和使用的三大原则
- state以单一对象存储在stroe对象当中
- state只读（每次都返回一个新的对象）
- 使用纯函数reducer进行state的更新

## 3.2 Redux开发者工具
- 安装开发者工具，Chrome扩展下载地址：`https://github.com/zalmoxisus/redux-devtools-extension/releases`
- 配置redux开发者工具：
```js
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from "redux-thunk"; // redux-thunk中间件

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(reduxThunk)
));
```
- 注意：redux开发者工具默认是不展示的，不配置代码是无法获取store的

## 4 纯函数
- 1 对外接没有副作用，不会影响其他状态，或者与外部函数等有交互
- 2 同样的输入，会得到同样的输出

## 5 React18 改变
### 1 并发模式的渲染
react18当中引入了一个新的Api（root），支持并发模式渲染

### 2 React空组件的返回值
如果返回一个空组件，17当中只允许返回一个null，18当中则允许返回null和undefined，展示效果都是空白





























