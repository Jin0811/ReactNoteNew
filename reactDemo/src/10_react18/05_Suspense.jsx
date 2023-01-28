/**
 * Suspense
 * 17当中
 * - 如果不写fallback，则会报错
 * - 嵌套的Suspense，里面的Suspense不写fallback，则会使用外层的fallback
 * 
 * 18当中
 * - 不写fallback，不会报错
 * - 嵌套的Suspense，里面的Suspense不写Suspense，则会显示null，不会应用外层的Suspense
 * 
 */

import React, { useState, Suspense } from "react";

// 懒加载示例
// import NowPlaying from "./components/NowPlaying";
// import ComingSoon from "./components/ComingSoon";
const NowPlaying = React.lazy(() => import("./components/NowPlaying"));
const ComingSoon = React.lazy(() => import("./components/ComingSoon"));
const LazyDemo = () => {
  const [type, setType] = useState(1);
  return (
    <div>
      <button onClick={() => { setType(type === 1 ? 2 : 1); }}>切换</button>

      <Suspense fallback={<div>loading</div>}>
        {type === 1 ? <NowPlaying /> : <ComingSoon />}
      </Suspense>

      {/* 嵌套Suspense */}
      <Suspense>
        <Suspense>
          {type === 1 ? <NowPlaying /> : <ComingSoon />}
        </Suspense>
      </Suspense>
    </div>
  );
};


// 请求数据示例
function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("数据1");
    }, 1000);
  });
};
function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("数据2");
    }, 2000);
  });
};
function wrapPromise(promise) {
  let status = "pending";
  let result = null;
  let suspender = promise.then((res) => {
    status = "success";
    result = res;
  }, (err) => {
    status = "error";
    result = err;
  });
  return {
    read(){
      if (status === "pending") {
        throw suspender
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}
const source = {
  getData1: wrapPromise(fetchData1()),
  getData2: wrapPromise(fetchData2()),
};
const ComOne = () => {
  const data1 = source.getData1.read();
  return (
    <div>
      <h2>组件1</h2>
      <h3>{ data1 }</h3>
    </div>
  );
};
const ComTwo = () => {
  const data2 = source.getData2.read();
  return (
    <div >
      <h2>组件2</h2>
      <h3>{ data2 }</h3>
    </div>
  );
};
const FetchDemo = () => {

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ padding: "20px", border: "1px solid #ccc" }}>
        <Suspense fallback={"Loading"}>
          <ComOne />
        </Suspense>
      </div>

      <br />
      
      <div style={{ padding: "20px", border: "1px solid #ccc" }}>
        <Suspense fallback={"Loading"}>
          <ComTwo />
        </Suspense>
      </div>
    </div>
  );
};


export default FetchDemo;