import { HashRouter } from "react-router-dom";

import MyRouter from "./router/index_useRoutes"; // 导入路由组件
import Tabbar from "./components/Tabbar"; // 底部选项卡

function App() {
  return (
    <div className="app">
      <HashRouter>
        <div className="container">
          <MyRouter></MyRouter>

          {/* 底部Tabbar */}
          <Tabbar></Tabbar>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
