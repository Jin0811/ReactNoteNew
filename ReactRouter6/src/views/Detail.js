import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";

const Detail = () => {
  const [id, setId] = useState("");

  // 方式一：query （URLSearch）传参 /detail?id=1
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    let id = searchParams.get("id");
    setId(id);
  }, [searchParams]);

  // 方式二：路由传参（动态路由）
  const param = useParams();
  useEffect(() => {
    setId(param.id);
  }, [param]);

  // setSearchParams可以修改路由参数，相当于进行了一次路由跳转
  // 使用场景：譬如一个电商网站，你正在浏览一个商品，页面上显示了一个猜你喜欢的按钮，点击就可以展示另外一个商品的信息
  const handleClick = () => {
    setSearchParams({ id: 5933 });
  };

  return (
    <Fragment>
      <h1>Detail</h1>
      <p>电影ID：{ id }</p>
      <button onClick={handleClick}>第一种方式：猜你喜欢（使用setSearchParams）</button>
      <div style={{ margin: "20px 0px" }}></div>
      <button>第二种方式：猜你喜欢（需要使用useNavigate）</button>
    </Fragment>
  );
};

export default Detail;

/**
 * 获取：searchParams.get("id")
 * 判断参数是否存在：searchParams.has("id")
 * 改变路由参数：setSearchParams({ id: 5933 })
 */