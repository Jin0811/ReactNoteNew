import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { nowPlayingData } from "../../mockData";

const NowPlaying = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(nowPlayingData.data.films);
  }, []);

  const navigate = useNavigate();
  const handleClick = (item) => {
    // 方式一：query （URLSearch）传参 /detail?id=1
    // navigate(`/detail?id=${item.filmId}`);

    // 方式二：路由传参（动态路由）
    navigate(`/detail/${item.filmId}`);
  };

  return (
    <Fragment>
      <h3>NowPlaying</h3>
      { list.map(item => <div style={{ cursor: "pointer" }} key={item.filmId} onClick={() => { handleClick(item) }}>{ item.name }</div>) }
    </Fragment>
  );
};

export default NowPlaying;