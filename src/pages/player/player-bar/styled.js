import styled from "styled-components";

import sprite_icon from "@/assets/img/sprite_icon.png";
export const StyledPlayerBar = styled.div`
	position: fixed;
	left:0;
	bottom: 0;
	right: 0;
	width: 100%;
	z-index: 1000;
	.player-bar-wrap{
		position: absolute;
		left: 0;
		bottom:0;
		width: 100%;
		height: 53px;
		background-position: 0 0;
		background-repeat: repeat-x;
		/* 锁定/解锁 */
		.lock-box{
			position: absolute;
			top: -14px;
			right: 15px;
			width: 52px;
			height: 67px;
			background-position: 0 -380px;
			.btn-lock{
				display: block;
				cursor: pointer;
				overflow: hidden;
				text-indent: -9999em;
				width: 18px;
				height: 18px;
				margin: 6px 0 0 17px;
				/* 锁定 */
				background-position: -100px -380px;
				/* 解锁 */
				/* background-position: -80px -400px; */
			}
		}
		/* 内容 */
		.player-bar-cont{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 6px;
			height: 47px;
			.player-bar-l, .player-bar-c, .player-bar-r{
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 100%;
			}
			/* 左 */
			.player-bar-l{
				width: 110px;
				.prev-play, .next-play{
					cursor: pointer;
					display: block;
					width: 28px;
					height: 28px;
				}
				.prev-play{
					background-position: 0 -130px;
					&:hover{
						background-position: -30px -130px;
					}
				}
				.stop-play{
					cursor: pointer;
					display: block;
					width: 36px;
					height: 36px;
					background-position: 0 -204px;
					&:hover{
						background-position: -40px -204px;
					}
					&.stop{
						background-position: 0 -165px;
					}
				}
				.next-play{
					background-position: -80px -130px;
					&:hover{
						background-position: -110px -130px;
					}
				}
			}
			/* 中 */
			.player-bar-c{
				color: #fff;
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 642px;
				.img-box{
					position: relative;
					width: 34px;
					height: 34px;
					margin-right: 15px;
					.mask{
						cursor: pointer;
						position: absolute;
						top: 0px;
						left: 0px;
						display: block;
						width: 34px;
						height: 35px;
						overflow: hidden;
						text-indent: -9999em;
						background-position: 0 -80px;
					}
					img{
						display: block;
						width: 100%;
						height: 100%;
					}
				}
				.info-box{
					flex: 1;
					.info-text{
						display: flex;
						align-items: center;
						.name{
							cursor: pointer;
							max-width: 300px;
							color: #e8e8e8;
							text-shadow: 0 1px 0 #121212;
						}
						.icon-mv{
							cursor: pointer;
							width: 19px;
							height: 17px;
							margin-left: 3px;
							overflow: hidden;
							text-indent: -9999em;
							background-position: 0 -57px;
							&:hover{
								background-position: -20px -57px;
							}
						}
						.author-name{
							cursor: pointer;
							color: #9b9b9b;
							text-shadow: 0 1px 0 #171717;
							margin-left: 15px;
							&:hover{
								text-decoration: underline;
							}
						}
						.come-list{
							cursor: pointer;
							width: 14px;
							height: 15px;
							margin-left: 13px;
							overflow: hidden;
							text-indent: -9999em;
							background-position: -110px -103px;
							&:hover{
								background-position: -130px -103px;
							}
						}
					}
					.slider-box{
						display: flex;
						justify-content: space-between;
						align-items: center;
						/* 进度 */
						.slider-dom{
							width: 506px;
							height: 8px;
							padding: 0;
							margin: 0;
							.ant-slider-rail{
								height:100%;
								background-color: #535353;
								border-radius: 5px;
							}
							/* 走过的进度 */
							.ant-slider-track{
								height:100%;
								background-color: #C70C0C;
								border-radius: 5px;
								box-shadow: 2px 2px 3px #121212;
							}
							.ant-slider-step{
								height:100%;
								border-radius: 5px;
							}
							/* 进度按钮 */
							.ant-slider-handle{
								border: none;
								width: 22px;
								height: 22px;
								margin-top: -7px;
								background: url(${sprite_icon}) no-repeat;
								background-position: 0 -250px;
								box-shadow: none;
								&:hover{
									background-position: 0 -280px;
								}
							}
						}
						/* time */
						.time{
							color: #797979;
							text-shadow: 0 1px 0 #121212;
							span{
								color: #a1a1a1;
							}
						}
					}
				}
			}
			/* 右 */
			.player-bar-r{
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 200px;
				.bar-r-1{
					width: 60px;
					height: 36px;
					margin-left: 8px;
					.icon-coll, .icon-share{
						display: inline-block;
						cursor: pointer;
						width: 25px;
						height: 25px;
						margin: 10px 2px 0 0;
					}
					.icon-coll{
						background-position: -88px -163px;
						&:hover{
							background-position: -88px -189px;
						}
					}
					.icon-share{
						background-position: -114px -163px;
						&:hover{
							background-position: -114px -189px;
						}
					}
				}
				.bar-r-2{
					width: 128px;
					height: 36px;
					padding-left: 13px;
					background-position: -147px -238px;
					.icon-sound, .icon-pattern{
						display: inline-block;
						cursor: pointer;
						width: 25px;
						height: 25px;
						margin: 10px 2px 0 0;
					}
					.icon-sound{
						background-position: -2px -248px;
						&:hover{
							background-position: -31px -248px;
						}
					}
					.icon-pattern{
						background-position: -3px -344px;
						&:hover{
							background-position: -33px -344px;
						}
					}
					.icon-playlist{
						display: inline-block;
						cursor: pointer;
						width: 59px;
						height: 25px;
						padding-left: 20px;
						line-height: 28px;
						text-align: center;
						color: #666;
						text-shadow: 0 1px 0 #080707;
						text-indent: 0;
						background-position: -42px -68px;
						&:hover{
							background-position: -42px -98px;
						}
					}
				}
			}
		}
	}
`