import React, { useState } from 'react';
import store from '../redux/store';

const Main = (props) => {
  let temp = store.getState().cityName;
  const [cityName] = useState(temp);

  const chooseCity = () => {
    props.history.push("/city");
  };

  return (
    <div className='cinemas'>
      <h2>影院 - { cityName }</h2>

      <button style={{ marginTop: "20px" }} onClick={chooseCity}>选择城市</button>
    </div>
  );
};

export default Main;