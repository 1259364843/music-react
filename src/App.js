import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

// 路由
import routes from "./router";

// redux
import store from "./store/index";
// 组件
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
          {renderRoutes(routes)}
        <AppFooter />
      </HashRouter>
    </Provider>
  );
});

export default App;
