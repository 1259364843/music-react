
// 导入常量
import * as actionTypes from './constants';

// 导入网络请求方法

import { 
  getTopBanners,
  getHotRecommends
} from '@/services/recommend';

// 改变state数据的action
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
});
const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})
/**
 * Action本身是一个函数
 * 返回一个函数,作为dispatch的参数
 */

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      // console.log(res);
      dispatch(changeTopBannerAction(res));
    })
  }
};
export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res));
    })
  }
}

