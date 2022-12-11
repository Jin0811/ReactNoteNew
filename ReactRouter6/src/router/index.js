import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// import Film from "../views/Film.js";
// import Cinema from "../views/Cinema.js"; // 使用自定义的Lazyload，来进行路由懒加载
// import Center from "../views/Center.js";
// import Search from "../views/Search.js";
// import Detail from "../views/Detail.js";
// import Login from "../views/Login.js";
// import NotFound from "../views/NotFound.js";

// import ComingSoon from "../views/films/ComingSoon";
// import NowPlaying from "../views/films/NowPlaying";

import Redirect from "../components/Redirect";

function MyRouter() {
  return (
    <Routes>
      {/* 根路由时，渲染Film组件，这个功能与重定向功能重复，只不过index跟父路径的路径一致 */}
      {/* <Route path='/' element={<Film />}></Route> */}
      {/* <Route index element={<Film />}></Route> */}

      {/* 嵌套路由 */}
      <Route path='/films' element={Lazyload("Film")}>
        {/* 使用index属性来使得父路径匹配到时，渲染NowPlaying */}
        {/* <Route index element={<NowPlaying />}></Route> */}

        <Route path="/films" element={<Navigate to="/films/nowPlaying" />}></Route>
        <Route path='nowPlaying' element={Lazyload("films/NowPlaying")}></Route>
        <Route path='/films/comingSoon' element={Lazyload("films/ComingSoon")}></Route>
      </Route>

      <Route path='/detail/:id' element={Lazyload("Detail")}></Route>

      {/* 路由懒加载 */}
      <Route path='/cinemas' element={Lazyload("Cinema")}></Route>
      <Route path='/cinemas/search' element={Lazyload("Search")}></Route>

      {/* 注意：这里的三目表达式，只会在初始化时执行一次，V5版本当中，这里写的是一个回调函数，所以每次都会执行，但是V6这里是一个组件 */}
      {/* <Route path='/center' element={ isAuth() ? <Center /> : <Redirect to="/login" /> }></Route> */}
      <Route path='/center' element={
        <AuthComponment>
          { Lazyload("Center") }
        </AuthComponment>
      }></Route>

      <Route path='/login' element={Lazyload("Login")}></Route>

      {/* 重定向 */}
      {/* <Route path="/" element={<Navigate to="/films" />}></Route> */}
      <Route path="/" element={<Redirect to="/films" />}></Route>

      {/* 404 */}
      <Route path="*" element={Lazyload("NotFound")}></Route>
    </Routes>
  );
}

// 权限组件
const AuthComponment = ({ children }) => {
  const isLogin = localStorage.getItem("token");
  return isLogin ? children : <Redirect to="/login"></Redirect>;
};

// 路由懒加载
const Lazyload = (path) => {
  const Comp = React.lazy(() => import(`../views/${path}`));
  return (
    <React.Suspense fallback={<h1>加载中...</h1>}>
      <Comp></Comp>
    </React.Suspense>
  );
};


export default MyRouter;

/**
 * <Route index element={<Film />}></Route>
 * index用于嵌套路由，仅匹配父路径时，设置渲染的组件
 * 解决当嵌套路由有多个子路由，但本身无法确认渲染哪个子路由的时候，可以增加index属性来指定默认路由
 * index路由和其他路由不同的地方是它没有path，这个路由和父路由共享一个路径
 * 
 * react-router-dom@6当中去除了Redirect组件
 * 解决方案：
 * 1、使用Route和Navigate组件相结合，实现重定向
 * <Route path="/" element={<Navigate to="/films"/>}></Route>
 * 2、自定义一个Redirect组件
 * 参照：src/components/Redirect.js
 * 
 * 嵌套路由支持相对路径
 * <Route path='/films/comingSoon' element={<ComingSoon />}></Route>
 * <Route path='nowPlaying' element={<NowPlaying />}></Route>
 * 
 */