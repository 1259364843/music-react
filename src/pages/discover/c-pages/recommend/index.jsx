import React, { memo, useEffect } from "react";
import { connect } from "react-redux";

// 导入action
import { getTopBannerAction } from './store/actionCreators';

function Recommend(props) {
  // 解构
  const { getBanners, topBanners } = props;
  useEffect(() => {
    getBanners();
  }, [ getBanners ])
  return (
    <div>Recommend{ topBanners.length }</div>
  );
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})

// 通过传入的dispatch派发action
const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
