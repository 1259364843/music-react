
import request from './request';

// 1.获取顶部轮播图
export function getTopBanners() {
  return request({
    url: "/banner"
  })
}
// 2.获取推荐歌单
// limit:限制条数
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}
