/**
 * Redux简易实现
 */

function createStore(reducer){
  let list = [];
  let state = reducer(undefined, {});

  function subscribe(callBack){
    list.push(callBack);
  }

  function dispatch(action){
    state = reducer(state, action);
    list.forEach((callBack) => {
      callBack && callBack();
    });
  }

  function getState(){
    return state;
  }

  return { subscribe, dispatch, getState };
}


// State的初始值
const initState = {
  show: true,
};
// 创建reducer，设置store的初始值：preState = initState
const reducer = (preState = initState, action) => {
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

// 创建store，在这里也可以设置初始state，createStore(reducer, initState)
const store = createStore(reducer);

export default store;