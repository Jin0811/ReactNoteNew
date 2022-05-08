/**
 * 项目的路由组件
 */

import React, { Component } from 'react';

// 路由导入
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import Films from "../views/Films";
import Cinemas from "../views/Cinemas";
import Center from "../views/Center";
import Detail from "../views/Detail";
import Login from "../views/Login";
import NotFound from "../views/NotFound";

// 权限认证函数
function auth(){
  let token = localStorage.getItem("token");
  return token;
}

class RouterComponent extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>

          <Route path="/films" component={Films}></Route>
          <Route path="/cinemas" component={Cinemas}></Route>

          {/* 路由拦截 */}
          {/* <Route path="/center" component={Center}></Route> */}
          {/* 这种模式下，Center不在是Route组件的子组件了，没办法接受props.history，但是render当中有一个props形参，可以手动传递给Center组件 */}
          <Route path="/center" render={(props) => {
            return auth() ? <Center></Center> : <Redirect to="/login"></Redirect>
          }}></Route>

          {/* 动态路由 */}
          <Route path="/detail/:id" component={Detail}></Route>
          {/* query和state */}
          {/* <Route path="/detail" component={Detail}></Route> */}

          {/* 重定向，模糊匹配，匹配到上面之后，最后会匹配到这里，刷新页面会导致路由页面显示错误，可以用Switch组件解决此问题 */}
          {/* 添加exact属性来开启精确匹配 */}
          <Redirect from="/" to="films" exact></Redirect>

          {/* 添加404功能 */}
          {/* 如果路由的模式是模糊匹配，则永远都不会走到这里，因为会最先匹配到 / 可以通过开启精确匹配来解决此问题 */}
          <Route component={NotFound}></Route>
        </Switch>
        
        {/* 底部的TabBar */}
        { this.props.children }
      </HashRouter>
    );
  }
}

export default RouterComponent;