import styled from "styled-components";

export const StyledToplistContItem = styled.div`
	.toplist-item{
		width: 230px;
		/* 头部 */
		.toplist-item-top{
			display: flex;
			height: 120px;
			padding: 20px 0 0 19px;
			.left{
				width: 80px;
				height: 80px;
				img{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			.right{
				width: 116px;
				margin: 6px 0 0 10px;
				.name{
					color: #333;
					font-weight: bold;
				}
				.btn-box{
					padding-top: 6px;
					.icon-play{
						display: inline-block;
						cursor: pointer;
						width: 22px;
						height: 22px;
						margin-right: 10px;
						background-position: -267px -205px;
						&:hover{
							background-position: -267px -235px;
						}
					}
					.icon-coll{
						display: inline-block;
						cursor: pointer;
						width: 22px;
						height: 22px;
						margin-right: 10px;
						background-position: -300px -205px;
						&:hover{
							background-position: -300px -235px;
						}
					}
				}
			}
		}
		/* 内容 */
		.toplist-item-cont{
			height: 319px;
			line-height: 32px;
			.item-row{
				display: flex;
				align-items: center;
				cursor: pointer;
				justify-content: space-between;
				height: 32px;
				overflow: hidden;
				&:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3){
					.row-l .num{
						color: #c10d0c;
					}
				}
				&:hover{
					.row-r{
						display: flex;
					}
				}
				/* 左 */
				.row-l{
					display: flex;
					align-items: center;
					height: 32px;
					margin-left: 15px;
					.num, .name{
						display: block;
						height: 32px;
					}
					.num{
						width: 30px;
						color: #666;
						font-size: 16px;
						padding-right: 8px;
					}
					.name{
						width: 96px;
						color: #000;
						&:hover{
							text-decoration: underline;
						}
					}
				}
				/* 右 */
				.row-r{
					display: none;
					align-items: center;
					height: 32px;
					.icon-play, .icon-add, .icon-coll{
						display: block;
						width: 17px;
						height: 17px;
						cursor: pointer;
					}
					.icon-play{
						margin-right: 10px;
						background-position: -267px -268px;
						&:hover{
							background-position: -267px -288px;
						}
					}
					.icon-add{
						margin: 2px 6px 0 0;
						background-position: 0 -700px;
						&:hover{
							background-position: -22px -700px;
						}
					}
					.icon-coll{
						margin-right: 10px;
						background-position: -297px -268px;
						&:hover{
							background-position: -297px -288px;
						}
					}
				}
			}
		}
		.more{
			cursor: pointer;
			display: inline-block;
			width: 100%;
			height: 32px;
			padding-right: 32px;
			text-align: right;
			line-height: 32px;
			&:hover{
				text-decoration: underline;
			}
		}
	}
`