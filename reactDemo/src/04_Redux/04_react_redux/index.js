import { Provider } from "react-redux";

import { PersistGate } from 'redux-persist/integration/react';


import { store, persistor } from "./redux/store";
import App from "./App";

// 利用react-redux当中的Provider包裹一下App组件
const ProviderApp = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App></App>
      </PersistGate>
    </Provider>
  );
};

export default ProviderApp;


/**
 * 此文件一般为入口文件，用Provider包裹App组件，设置全局的store
 * 挂载的时候，引入的是此文件
 */