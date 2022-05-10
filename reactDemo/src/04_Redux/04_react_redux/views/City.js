import React, { useState } from 'react';

import { connect } from "react-redux";

const Main = (props) => {
  const [list] = useState(["北京", "上海", "深圳", "广州"]);

  const chooseCity = (item) => {
    props.changeCity(item);

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


const mapDispatchToProps = {
  changeCity(item){
    return {
      type: "changeCity",
      payload: item
    };
  }
};
export default connect(null, { ...mapDispatchToProps })(Main);