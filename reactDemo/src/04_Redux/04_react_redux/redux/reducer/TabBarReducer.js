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
      return newState
  }
};

export default reducer;