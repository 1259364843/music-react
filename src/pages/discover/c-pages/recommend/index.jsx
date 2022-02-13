import React, { memo } from "react";

// 子组件
import TopBanner from "./c-cpns/top-banner";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import RecommendRanking from "./c-cpns/recommend-ranking";
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
      { /*轮播图*/ }
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          {/*热门推荐*/}
          <HotRecommend />
          {/*新碟上架*/}
          <NewAlbum />
          {/*推荐榜单*/}
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
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
