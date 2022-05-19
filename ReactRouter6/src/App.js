import { HashRouter } from "react-router-dom";

// 导入路由组件
import MyRouter from "./router";

function App() {
  return (
    <HashRouter>
      <MyRouter></MyRouter>
    </HashRouter>
  );
}

export default App;
