import React from "react";
import { Redirect } from "react-router";
// 组件
import Discover from "@/pages/discover";
import Friend from "@/pages/friend";
import Mine from "@/pages/mine";
// 子组件
import Recommend from "@/pages/discover/c-pages/recommend";
import Ranking from "@/pages/discover/c-pages/ranking";
import Songs from "@/pages/discover/c-pages/songs";
import Djradio from "@/pages/discover/c-pages/djradio";
import Artist from "@/pages/discover/c-pages/artist";
import Album from "@/pages/discover/c-pages/album";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: Discover,
    // 子路由
    routes: [
      {
        path: "/discover/recommend",
        component: Recommend
      },
      {
        path: "/discover/ranking",
        component: Ranking
      },
      {
        path: "/discover/songs",
        component: Songs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: Djradio
      },
      {
        path: "/discover/artist",
        component: Artist
      },
      {
        path: "/discover/album",
        component: Album
      }
    ]
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
