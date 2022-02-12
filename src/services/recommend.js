
import request from './request';

// 1.获取顶部轮播图
export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

