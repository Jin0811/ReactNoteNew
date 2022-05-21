import React from "react";
import { NavLink } from "react-router-dom";

export default function Tabbar(){
  return (
    <div className="tab-bar">
      <NavLink className={({isActive}) => isActive ? "tab-bar-active" : "" } to="/films">电影</NavLink>
      <NavLink className={({isActive}) => isActive ? "tab-bar-active" : "" } to="/cinemas">影院</NavLink>
      <NavLink className={({isActive}) => isActive ? "tab-bar-active" : "" } to="/center">我的</NavLink>
    </div>
  );
}

/**
 * NavLink 和 Link组件基本相同
 * 只不过NavLink可以实现高亮效果
 * 
 * NavLink 激活的CSS类默认为：active
 * 也可以通过 className 属性来指定一个CSS类
 * 语法：className={({isActive}) => isActive ? "tab-bar-active" : "" }
 */