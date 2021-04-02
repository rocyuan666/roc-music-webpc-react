import styled from "styled-components";

export const StyledHotRecommendWrap = styled.div`
	/* 内容 */
	.hot-rc-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-top: 20px;
		.hot-rc-item{
			width: 140px;
			padding-bottom: 30px;
			.img-box{
				height: 140px;
				position: relative;
				overflow: hidden;
				cursor: pointer;
				&:hover{
					img{
						transform: scale(1.08);
					}
				}
				img{
					display: block;
					width: 140px;
					transition: all .3s;
				}
				.mask{
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					z-index: 1;
					background-position: 0 0;
				}
				.bottom{
					display: flex;
					justify-content: space-between;
					align-items: center;
					position: absolute;
					bottom: 0;
					left: 0;
					z-index: 2;
					width: 100%;
					height: 27px;
					line-height: 30px;
					background-position: 0 -537px;
					color: #ccc;
					.play-num{
						.icon-headset{
							display: inline-block;
							width: 14px;
							height: 11px;
							background-position: 0 -24px;
							margin: 0 5px 0 10px;
						}
					}
					.btn-play{
						width: 16px;
						height: 17px;
						margin-right: 10px;
						background-position: 0 0;
						&:hover{
							background-position: 0 -60px;
						}
					}
				}
			}
			.hot-rc-name{
				cursor: pointer;
				color: #000;
				margin: 8px 0 3px;
				font-size: 14px;
				&:hover{
					text-decoration: underline;
				}
			}
		}
	}
`