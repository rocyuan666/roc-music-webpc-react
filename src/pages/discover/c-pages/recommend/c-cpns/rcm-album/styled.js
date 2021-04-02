import styled from "styled-components";

export const StyleRcmAlbum = styled.div`
	padding-top: 30px;
	.new-album-wrap{
		height: 186px;
		overflow: hidden;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
		.new-album-box{
			position: relative;
			height: 184px;
			/* padding-left: 16px; */
			background: #f5f5f5;
			border: 1px solid #fff;
			.ant-carousel{
				height: 148px;
				.banner-main{
					width: 645px;
					margin: 28px auto 0;
					height: 180px;
					.banner-item{
						display: flex;
						.banner-item-item{
							position: relative;
							width: 118px;
							height: 150px;
							margin-left: 11px;
							background-position: -260px 100px;
							.mask{
								position: absolute;
								left: 0;
								top: 0;
								width: 118px;
								height: 100px;
								cursor: pointer;
								background-position: 0 -570px;
							}
							.name, .artist-name{
								line-height: 18px;
								font-size: 12px;
								cursor: pointer;
								&:hover{
									text-decoration: underline;
								}
							}
							.name{
								color: #000;
								padding-top: 7px;
							}
							.artist-name{
								color: #666;
							}
						}
					}
				}
			}
			.icon-left, .icon-right{
				position: absolute;
				top: 50%;
				margin-top: -7px;
				font-size: 14px;
				font-weight: bold;
				transition: all .3s;
				&:hover{
					transform: scale(1.2);
				}
			}
			.icon-left{
				left: 6px;
			}
			.icon-right{
				right: 6px;
			}
		}
	}
`