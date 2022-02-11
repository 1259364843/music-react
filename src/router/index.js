import React from "react";
import { Redirect } from "react-router";
// 组件
import Discover from "@/pages/discover";
import Friend from "@/pages/friend";
import Mine from "@/pages/mine";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: Discover,
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/friend",
    component: Friend,
  },
];

export default routes;
