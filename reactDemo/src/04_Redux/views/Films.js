import React, { Component } from 'react';

import { Route, Redirect, Switch, NavLink } from "react-router-dom";

import NowPlaying from "./films/NowPlaying";
import ComingSoon from "./films/ComingSoon";

class Main extends Component {
  render() {
    return (
      <div className='films'>
        <h2>电影</h2>

        {/* 轮播 */}
        <div className='film-banner'>轮播区域</div>

        {/* Tab切换 */}
        <div className='film-type-tab'>
          <NavLink activeClassName='active-link' to="/films/nowPlaying">正在热映</NavLink>
          <NavLink activeClassName='active-link' to="/films/comingSoon">即将热映</NavLink>
        </div>

        {/* 路由容器区域 */}
        <div style={{ width: "100%", height: "300px", border: "1px solid #f1f1f1", boxSizing: "border-box", padding: "10px", overflowY: "auto" }}>
          <Switch>
            <Route path="/films/nowPlaying" component={NowPlaying}></Route>
            <Route path="/films/comingSoon" component={ComingSoon}></Route>

            <Redirect from="/films" to="/films/nowPlaying"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;