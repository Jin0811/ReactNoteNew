import React from "react";
import { useRoutes } from "react-router-dom";

import Redirect from "../components/Redirect";

const MyRouter = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Redirect to="/films" />,
    },
    {
      path: "/films",
      element: Lazyload("Film"),
      children: [
        {
          path: "",
          element: <Redirect to="/films/nowPlaying" />
        },
        {
          path: "nowPlaying",
          element: Lazyload("films/NowPlaying")
        },
        {
          path: "comingSoon",
          element: Lazyload("films/ComingSoon")
        }
      ]
    },
    {
      path: "/cinemas",
      element: Lazyload("Cinema"),
    },
    {
      path: "/cinemas/search",
      element: Lazyload("Search"),
    },
    {
      path: "/center",
      element: <AuthComponment>{ Lazyload("Center") }</AuthComponment>,
    },
    {
      path: "/detail/:id",
      element: Lazyload("Detail"),
    },
    {
      path: "/login",
      element: Lazyload("Login"),
    },
    {
      path: "*",
      element: Lazyload("NotFound")
    }
  ]);
  return element;
};

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