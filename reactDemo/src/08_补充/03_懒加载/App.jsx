import React, { Component, Suspense } from 'react';

import Loading from "./Loading";

// import NowPlaying from "./NowPlaying";
// import ComingSoon from "./ComingSoon";

// 懒加载
const NowPlaying = React.lazy(() => import("./NowPlaying"));
const ComingSoon = React.lazy(() => import("./ComingSoon"));

class App extends Component {

  state = {
    type: 1,
  };

  render() {
    return (
      <div>
        <button onClick={() => { this.setState({ type: 1 }) }}>正在热映</button>
        <button onClick={() => { this.setState({ type: 2 }) }}>即将热映</button>

        {/* 在组件被加载过程中，进行一个替代，以防页面出现空白 */}
        {/* <Suspense fallback="正在加载..."> */}
        <Suspense fallback={<Loading></Loading>}>
          { this.state.type === 1 && <NowPlaying></NowPlaying> }
          { this.state.type === 2 && <ComingSoon></ComingSoon> }
        </Suspense>

      </div>
    );
  }
}

export default App;