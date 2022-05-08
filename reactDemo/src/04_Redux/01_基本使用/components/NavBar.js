import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className='navbar'>
        {/* 声明式导航 */}
        <NavLink activeClassName='active-link' to="/films">电影</NavLink>
        <NavLink activeClassName='active-link' to="/cinemas">影院</NavLink>
        <NavLink activeClassName='active-link' to="/center">个人</NavLink>
      </div>
    );
  }
}

export default App;