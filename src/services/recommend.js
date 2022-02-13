
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
// 3.获取新碟上架
export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}