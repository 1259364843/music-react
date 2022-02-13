import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

// 参数常量
import { HOT_RECOMMEND_LIMIT } from "@/common/constants";
// 组件
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import SongsCover from "@/components/songs-cover";
// redux action
import { getHotRecommendAction } from "../../store/actionCreators.js";

// 样式
import { HotRecommendWrapper } from "./style";
export default memo(function HotRecommend() {
  // redux hooks
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"])
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // 其他hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <SongsCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
