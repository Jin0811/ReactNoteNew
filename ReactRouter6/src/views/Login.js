import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("token", "123456");
    navigate("/center");
  };

  return (
    <Fragment>
      <h1>Login</h1>
      <button onClick={login}>登录</button>
    </Fragment>
  );
};

export default Login;