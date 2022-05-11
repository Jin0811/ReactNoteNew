// 创建reducer
const reducer = (preState, action) => {
  let newState = { ...preState };
  switch (action.type) {
    case "changeList":
      newState.list = action.payload;
      return newState;
    default:
      // 注意：这里如果没有匹配到，需要返回原有的state，如果返回一个解构过的新state，则会导致redux-persist失效
      return preState || {}
  }
};

export default reducer;