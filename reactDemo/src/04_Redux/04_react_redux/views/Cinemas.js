import React, { useEffect } from 'react';

import { getCinemaListAction } from "../redux/actionCreater/CinemasListActionCreater";

import { connect } from "react-redux";

const Main = (props) => {

  let { list, getCinemaListAction } = props;
  useEffect(() => {
    if(list.length === 0){
      // 去后台去数据、actionCreater当中进行异步
      getCinemaListAction();
    }
  }, [list, getCinemaListAction]);

  // 选择城市
  const chooseCity = () => {
    props.history.push("/city");
  };

  return (
    <div className='cinemas'>
      <h2>影院</h2>

      {/* 选择城市 */}
      <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }} >
        <h2 style={{ marginRight: "15px" }}>{ props.cityName }</h2>
        <button onClick={chooseCity}>选择城市</button>
      </div>

      {/* 影院列表 */}
      <div className="cinema-list" style={{ height: "500px", overflowY: "auto", marginTop: "10px" }}>
        { props.list.map(item => {
            return (
              <div key={item.cinemaId}>{ item.name }</div>
            )
          })
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cityName: state.CityReducer.cityName,
    list: state.CinemaListReducer.list,
  };
};
const mapDispatchToProps = { getCinemaListAction };

export default connect(mapStateToProps, mapDispatchToProps)(Main);