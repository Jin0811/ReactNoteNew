import React, { useState, useEffect } from 'react';

// 引入useHistory
import { useHistory } from "react-router-dom";
import { comingSoonData } from "../../mockData";

const Main = () => {
  const [list, setList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    setList(comingSoonData.data.films);
  }, []);

  const handleClick = (item) => {
    history.push(`/detail/${item.filmId}`);
  };

  return (
    <div className='coming-soon'>
        <h2>ComingSoon</h2>
        { list.map(item => <div className='film-item' key={item.filmId} onClick={() => handleClick(item)}>{ item.name }</div>) }
      </div>
  );
};

export default Main;