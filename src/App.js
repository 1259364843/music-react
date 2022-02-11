import React, { memo } from "react";

// 路由
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import routes from "./router";

// 组件
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

const App = memo(() => {
  return (
    <div>
      <HashRouter>
        <AppHeader />
          {renderRoutes(routes)}
        <AppFooter />
      </HashRouter>
    </div>
  );
});

export default App;
