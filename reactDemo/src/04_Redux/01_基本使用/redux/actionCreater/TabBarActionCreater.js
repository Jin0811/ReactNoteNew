/**
 * TabBar 的 ActionCreater
 */

function show(){
  return {
    type: "show"
  };
}

function hide(){
  return {
    type: "hide"
  };
}

export {
  show,
  hide
};