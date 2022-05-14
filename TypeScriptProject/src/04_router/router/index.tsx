import React, { Component } from 'react';

// 需要安装react-router-dom的声明文件
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import Film from "../views/Film";
import Cinema from "../views/Cinema";
import Center from "../views/Center";
import Detail from "../views/Detail";

class componentName extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/film" component={Film}></Route>
          <Route path="/cinema" component={Cinema}></Route>
          <Route path="/center" component={Center}></Route>
          <Route path="/detail/:id/:name" component={Detail}></Route>
          <Redirect from='/' to="/film"></Redirect>
        </Switch>
      </HashRouter>
    );
  }
}

export default componentName;