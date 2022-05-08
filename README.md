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