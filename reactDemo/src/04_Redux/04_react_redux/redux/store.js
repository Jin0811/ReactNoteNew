import { combineReducers, createStore, applyMiddleware } from "redux";

// redux-thunk中间件
import reduxThunk from "redux-thunk";

// redux-pormise
import reduxPormise from "redux-promise";

// 分别引入各个模块的reducer，在进行合并
import CityReducer from "./reducer/CityReducer";
import TabBarReducer from "./reducer/TabBarReducer";
import CinemaListReducer from "./reducer/CinemaListReducer";


// react-redux数据持久化
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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


//在localStorge中生成key为root的值
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["CityReducer"], // 白名单，设置某个reducer进行持久化 
  // blacklist:[], // 黑名单，设置某个reducer数据不持久化
};

const myPersistReducer = persistReducer(persistConfig, reducer);

// 创建store，在这里也可以设置初始state，createStore(reducer, initState)
const store = createStore(myPersistReducer, initState, applyMiddleware(reduxThunk, reduxPormise));

const persistor = persistStore(store);

export { store, persistor };