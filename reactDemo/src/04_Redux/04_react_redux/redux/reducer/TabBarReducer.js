const reducer = (preState, action) => {
  let newState = { ...preState };
  switch (action.type) {
    case "show":
      newState.show = true;
      return newState;
    case "hide":
      newState.show = false;
      return newState;
    default:
      // 注意：这里如果没有匹配到，需要返回原有的state，如果返回一个解构过的新state，则会导致redux-persist失效
      return preState || {}
  }
};

export default reducer;