import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 自定义一个Redirect组件
function Redirect({to}){
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace: true });
  });
  return null;
}

export default Redirect;