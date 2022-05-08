// 创建reducer
const reducer = (preState, action) => {
  let newState = { ...preState };
  switch (action.type) {
    case "changeCity":
      newState.cityName = action.payload;
      return newState;
    default:
      return newState
  }
};

export default reducer;