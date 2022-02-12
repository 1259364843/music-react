import React, { memo } from 'react'

// 数据
import { dicoverMenu } from "@/common/local-data";

import { NavLink } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
// 样式
import {
  DiscoverWrapper,
  TopMenu
} from './style';
export default memo(function Discover(props) {
  /*路由对象*/
  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  {/*路由跳转*/}
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
