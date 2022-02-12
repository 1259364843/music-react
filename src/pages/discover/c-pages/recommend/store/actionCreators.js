
// 导入常量
import * as actionTypes from './constants';

// 导入网络请求方法

import { 
  getTopBanners
} from '@/services/recommend';

// 
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
});

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


