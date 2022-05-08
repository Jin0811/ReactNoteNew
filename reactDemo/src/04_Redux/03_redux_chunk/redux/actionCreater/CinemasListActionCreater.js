/**
 * TabBar 的 ActionCreater
 */
import axios from "axios";

// redux-thunk中间件
// function getCinemaListAction(){
//   // 使用redux-thunk中间件之后，中间件会判断这里返回的值是什么
//   // 如果是一个方法，则执行这个方法，并且向这个方法传递dispatch
//   // 如果是一个对象，则直接返回
//   return (dispatch) => {
//     axios({
//       url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7679453",
//       method: "get",
//       headers: {
//         "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651393709717938143264769","bc":"110100"}',
//         "X-Host": "mall.film-ticket.cinema.list",
//       }
//     }).then(res => {
//       dispatch({ type: "changeList", payload: res.data.data.cinemas });
//     });
//   }
// }

// redux-promise中间件，返回值是一个promise对象
function getCinemaListAction(){
  return axios({
    url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7679453",
    method: "get",
    headers: {
      "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651393709717938143264769","bc":"110100"}',
      "X-Host": "mall.film-ticket.cinema.list",
    }
  }).then(res => {
    return { type: "changeList", payload: res.data.data.cinemas }
  });
}

export { getCinemaListAction };