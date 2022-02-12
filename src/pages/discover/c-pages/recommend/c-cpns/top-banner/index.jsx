import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

// 导入action
import { getTopBannerAction } from "../../store/actionCreators";
// 样式
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";
// 样式组件
import { Carousel } from "antd";
export default memo(function TopBanner() {

  const [currentIndex, setCurrentIndex] = useState(0);
  // 1.获取dispatch对象
  const dispatch = useDispatch();
  // 获取数据
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get("recommend").get("topBanners")
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  // 其他hooks
  const bannerRef = useRef();
  // 2.发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  // 有记忆的函数,缓存
  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);

  // 其他业务逻辑
  // 获取模糊背景图
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
  return (
    <BannerWrapper bgImage={ bgImage }>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={ bannerRef } beforeChange={ bannerChange }>
          { /*轮播图内容填充*/ }
          {
            topBanners.map((item, index) => {
              return(
                <div className="banner-item" key={ item.imageUrl }>
                  <img className="image" src={ item.imageUrl } alt={ item.typeTitle }></img>
                </div>
              )
            })
          }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={ e => bannerRef.current.prev() }></button>
          <button className="btn right" onClick={ e => bannerRef.current.next() }></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
