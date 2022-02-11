import React, { memo } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default memo(function AppHeader() {
  return (
    <div>
      <NavLink to="/discover">发现音乐</NavLink>
      <NavLink to="/mine">我的音乐</NavLink>
      <NavLink to="/friend">我的朋友</NavLink>
    </div>
  );
});
