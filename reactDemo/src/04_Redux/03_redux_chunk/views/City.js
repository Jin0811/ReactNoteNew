import React, { useState } from 'react';
import store from '../redux/store';

const Main = (props) => {
  const [list] = useState(["北京", "上海", "深圳", "广州"]);

  const chooseCity = (item) => {
    store.dispatch({ type: "changeCity", payload: item });

    props.history.goBack();
  };

  return (
    <div className='city'>
      <h2>城市列表</h2>
      <div>
        { list.map((item, index) => <div className='city-item' key={index} onClick={() => chooseCity(item)}>{ item }</div>) }
      </div>
    </div>
  );
};

export default Main;