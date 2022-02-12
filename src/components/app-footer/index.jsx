import React, { memo, Fragment } from 'react';

import { footerLinks, footerImages } from "@/common/local-data";

import {
  FooterWrapper,
  FooterLeft,
  FooterRight,
} from './style';

export default memo(function HYAppFooter() {
  return (
  <FooterWrapper>
    <div className="wrap-v2 content">
      <FooterLeft className="left">
        <div className="link">
          {
            footerLinks.map(item => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                  <span className="line">|</span>
                </Fragment>
              )
            })
          }
        </div>
        <div className="copyright">
          <span>网易公司版权所有©1997-{new Date().getFullYear()}</span>
          <span>
            杭州乐读科技有限公司运营：
            <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png" rel="noopener noreferrer" target="_blank">浙网文[2021]1186-054号</a>
          </span>
        </div>
        <div className="report">
          <span>违法和不良信息举报电话：0571-89853516</span>
          <span>
            举报邮箱：
            <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">ncm5990@163.com</a>
          </span>
        </div>
        <div className="info">
          <span>粤B2-20090191-18</span>
          <a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noopener noreferrer" target="_blank">
            工业和信息化部备案管理系统网站
          </a>
        </div>
      </FooterLeft>
      <FooterRight className="right">
        {
          footerImages.map((item, index) => {
            return (
              <li className="item" key={item.link}>
                <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                {/**<span className="title">{item.title}</span> */}
              </li>
            )
          })
        }
      </FooterRight>
    </div>
  </FooterWrapper>
  )
})