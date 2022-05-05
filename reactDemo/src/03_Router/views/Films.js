import React, { Component } from 'react';

import { Route, Redirect, Switch } from "react-router-dom";

import NowPlaying from "./films/NowPlaying";
import ComingSoon from "./films/ComingSoon";

class Main extends Component {
  render() {
    return (
      <div className='films'>
        <h2>Films</h2>

        {/* 轮播 */}
        <div style={{ width: "100%", height: "200px", background: "#f1f1f1", display: "flex", justifyContent: "center", alignItems: "center" }}>轮播区域</div>

        {/* 路由容器区域 */}
        <div style={{ width: "100%", height: "300px", border: "1px solid #f1f1f1", marginTop: "20px", boxSizing: "border-box", padding: "10px", overflowY: "auto" }}>
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