import styled from "styled-components";

import notloginFriend from "@/assets/img/notlogin-friend.jpg";
import notloginMy from "@/assets/img/notlogin-my.png";

// 无登录 样式
export const StyledNoneLoginWrap = styled.div`
	.cont-wrap{
		background-color: #f99;
		min-height: 700px;
		border: 1px solid #d3d3d3;
		border-width: 0 1px;
		background-color: #fff;
		/* 朋友 页面的内容 */
		.bg-img-friend{
			width: 902px;
			height: 466px;
			margin: 0 auto 0;
			padding-top: 70px;
			background: url(${notloginFriend}) no-repeat center 0;
			background-position: 0 70px;
			.login-text{
				padding: 178px 0 0 535px;
				line-height: 23px;
				font-size: 14px;
				color: #666;
			}
			.btn-login{
				display: block;
				width: 157px;
				height: 48px;
				margin: 36px 0 0 535px;
				background: url(${notloginFriend}) no-repeat center 0;
				background-position: 0 9999px;
				cursor: pointer;
				&:hover{
					background-position: 0 -430px;
				}
			}
		}
		/* 我的音乐 页面的内容 */
		.bg-img-my{
			width: 902px;
			height: 380px;
			margin: 0 auto 0;
			padding-top: 104px;
			background: url(${notloginMy}) no-repeat center 0;
			background-position: 0 104px;
			.btn-login{
				display: block;
				width: 167px;
				height: 45px;
				margin: 202px 0 0 482px;
				background: url(${notloginMy}) no-repeat center 0;
				background-position: 0 9999px;
				cursor: pointer;
				&:hover{
					background-position: 0 -278px;
				}
			}
		}
	}
`