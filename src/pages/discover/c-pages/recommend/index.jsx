import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

// 导入action
import { getTopBannerAction } from './store/actionCreators';

function Recommend(props) {
  // 1.获取dispatch对象
  const dispatch = useDispatch();
  // 获取数据
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)

  // 2.发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [ dispatch ]);
  return (
    <div>Recommend{topBanners.length}</div>
  );
}

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// // 通过传入的dispatch派发action
// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
export default memo(Recommend);
