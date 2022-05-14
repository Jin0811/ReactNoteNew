import { createStore } from "redux";

// 创建reducer，约束action
interface actionInterface{
  type: string,
  payload?: any, // payload可选，因为有些reducer不需要传递参数
}
interface preStateInterface{
  show: boolean
}
const reducer = (preState:preStateInterface={ show: true }, action:actionInterface) => {
  const { type } = action;
  const newState = { ...preState };
  switch (type) {
    case "show":
      newState.show = true;
      return newState;
    case "hide":
      newState.show = false;
      return newState;
    default:
      // 注意：这里如果没有匹配到，需要返回原有的state，如果返回一个解构过的新state，则会导致redux-persist失效
      return preState;
  }
}

const store = createStore(reducer);

export default store;