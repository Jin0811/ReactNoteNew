import { combineReducers, createStore } from "redux";

// 分别引入各个模块的reducer，在进行合并
import CityReducer from "./reducer/CityReducer";
import TabBarReducer from "./reducer/TabBarReducer";
// 合并reducer
const reducer = combineReducers({
  CityReducer,
  TabBarReducer
});

// State的初始值
const initState = {
  TabBarReducer: {
    show: true,
  },
  CityReducer: {
    cityName: "北京"
  },
};

// 创建store，在这里也可以设置初始state，createStore(reducer, initState)
const store = createStore(reducer, initState);

export default store;