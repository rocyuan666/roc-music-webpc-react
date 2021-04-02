import styled from "styled-components";

import download_img from "@/assets/img/download.png";

export const StyledBannerWrap = styled.div`
	background: url(${props => props.bgImg}) no-repeat center center;
	background-size: 100% auto;
	/* position: relative;
	overflow: hidden; */
	.top-banner-wrap{
    height: 270px;
    overflow: hidden;
    .cont-banner{
      position: relative;
      height: 100%;
      .banner{
        width: 730px;
      }
      /* 对接后 去掉 */
      .banner-item{
        img{
          display: block;
          width: 730px;
				}
      }
      /* 轮播图 圆点 样式 */
      .slick-dots{
        li{
          button{
            width: 14px;
            height: 4px;
            border-radius: 2px;
            background-color: #fff;
          }
          &.slick-active{
            button{
              width: 20px;
              margin: 0;
              background-color: #a40011;
            }
          }
        }
      }
      /* 轮播图 左右箭头 样式 */
      .icon-left, .icon-right{
        position: absolute;
        top: 50%;
        font-size: 36px;
        color: #fff;
        margin-top: -18px;
        cursor: pointer;
        opacity: .3;
        transition: all .3s;
        &:hover{
          transform: scale(1.2);
          opacity: .6;
        }
      }
      .icon-left{
        left: -50px;
      }
      .icon-right{
        right: -50px;
      }
      /* 下载客户端 */
      .download-img{
        position: absolute;
        top: 0;
        right: 0;
        z-index: 20;
        width: 254px;
        height: 285px;
				background: url(${download_img}) no-repeat 0 0;
				p{
					margin: 5px auto;
					text-align: center;
					color: #8d8d8d;
				}
        .btn-download{
          display: block;
          width: 215px;
          height: 56px;
          margin: 186px 0 0 19px;
          cursor: pointer;
          background: url(${download_img}) no-repeat 0 0;
          background-position: 0 99999px;
          &:hover{
            background-position: 0 -290px;
          }
        }
      }
    }
  }
`
// 背景图片模糊 css实现
// export const StyledBannerBgImg = styled.div`
// 	position: absolute;
// 	width: 100%;
// 	height: 100%;
// 	left: 0;
// 	top: 0;
// 	background: url(${props => props.bgImg}) no-repeat center center;
// 	background-size: 100% auto;
// 	filter:blur(20px);
// 	-webkit-filter:blur(20px);
// 	-moz-filter:blur(20px);
// 	-ms-filter:blur(20px);
// 	-o-filter:blur(20px);
// 	transform: scale(1.2);
// `