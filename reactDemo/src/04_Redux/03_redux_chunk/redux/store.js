import { combineReducers, createStore, applyMiddleware } from "redux";

// redux-thunk中间件
import reduxThunk from "redux-thunk";

// redux-pormise
import reduxPormise from "redux-promise";

// 分别引入各个模块的reducer，在进行合并
import CityReducer from "./reducer/CityReducer";
import TabBarReducer from "./reducer/TabBarReducer";
import CinemaListReducer from "./reducer/CinemaListReducer";
// 合并reducer
const reducer = combineReducers({
  CityReducer,
  TabBarReducer,
  CinemaListReducer
});

// State的初始值
const initState = {
  TabBarReducer: {
    show: true,
  },
  CityReducer: {
    cityName: "北京"
  },
  CinemaListReducer: {
    list: []
  },
};

// 创建store，在这里也可以设置初始state，createStore(reducer, initState)
const store = createStore(reducer, initState, applyMiddleware(reduxThunk, reduxPormise));

export default store;