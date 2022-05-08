import React, { useEffect, useState } from 'react';
import store from '../redux/store';
import { getCinemaListAction } from "../redux/actionCreater/CinemasListActionCreater";

const Main = (props) => {
  let temp = store.getState().CityReducer.cityName;
  const [cityName] = useState(temp);
  const [list, setList] = useState([]);

  /**
   * 影院当中，有一个按钮可以跳转到搜索页面，搜索页面的数据与影院列表的数据相同
   * 使用redux，可以使用一份数据，避免多次请求
   */

  useEffect(() => {
    let list = store.getState().CinemaListReducer.list;
    if(list.length === 0){
      // 去后台去数据、actionCreater当中进行异步
      store.dispatch(getCinemaListAction());
    }else{
      // 使用原有数据
      setList(list);
    }

    // 通过订阅来拿到最新的数据
    let unSubscribe = store.subscribe(() => {
      console.log("订阅");
      setList(store.getState().CinemaListReducer.list);
    });

    // 销毁订阅（如果不销毁订阅，则会造成重复订阅，其他组件进行了dispatch，也会触发这里的订阅）
    return () => {
      unSubscribe(); // 这里unSubscribe是订阅成功之后返回的一个函数，专门用于取消这次订阅
    };
  }, []);

  // 选择城市
  const chooseCity = () => {
    props.history.push("/city");
  };

  return (
    <div className='cinemas'>
      <h2>影院</h2>

      {/* 选择城市 */}
      <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }} >
        <h2 style={{ marginRight: "15px" }}>{ cityName }</h2>
        <button onClick={chooseCity}>选择城市</button>
      </div>

      {/* 影院列表 */}
      <div className="cinema-list" style={{ height: "500px", overflowY: "auto", marginTop: "10px" }}>
        { list.map(item => {
            return (
              <div key={item.cinemaId}>{ item.name }</div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Main;