import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";


const WithRouter = (MyComponent) => {
  // 注意：这个HandleFun函数，一定要大驼峰，不然会报错，首字母大写的话，会被认为是一个函数式组件，就可以正常使用hooks
  function HandleFun(props){
    const push = useNavigate();
    const mathch = useParams();
    const location = useLocation();
    return <MyComponent history={{ push, mathch, location }} { ...props }></MyComponent>
  }
  return HandleFun;
}
export default WithRouter;


/**
 * WithRouter(<ComingSoon />);
 */