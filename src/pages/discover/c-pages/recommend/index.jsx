import React, { memo } from "react";

// 子组件
import TopBanner from "./c-cpns/top-banner";
// 样式
import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';
function Recommend(props) {

  return (
    <RecommendWrapper>
      <TopBanner />
    </RecommendWrapper>
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
