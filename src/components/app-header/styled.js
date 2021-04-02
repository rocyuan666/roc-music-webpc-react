import styled from "styled-components";

export const StyledAppHeaderWrap = styled.div`
	box-sizing: border-box;
	height: 75px;
	background: #242424;
	border-bottom: 5px solid #C20C0C;
	.header-wrap{
		display: flex;
		justify-content: space-between;
		height: 100%;
		.header-l{
			display: flex;
			height: 100%;
			.header-logo{
				display: block;
				width: 157px;
				height: 100%;
				background-position: 0 0;
				margin-right: 20px;
			}
			.nav-list{
				display: flex;
				align-items: center;
				.btn-link{
					position: relative;
					height: 100%;
					line-height: 70px;
					text-align: center;
					font-size: 14px;
					color: #ccc;
					padding: 0 19px;
					cursor: pointer;
					transition: all .2s;
					&:hover{
						background-color: #000;
						text-decoration: none;
						color: #fff;
					}
					&.btn-link-active{
						background-color: #000;
						text-decoration: none;
						color: #fff;
						.icon-act{
							height: 7px;
						}
					}
					.icon-act{
						position: absolute;
						width: 12px;
						height: 0px;
						overflow: hidden;
						bottom: -1px;
						left: 50%;
						margin-left: -6px;
						background-position: -226px 0;
						transition: all .2s;
					}
				}
			}
		}
		.header-r{
			display: flex;
			line-height: 32px;
			input{
				width: 158px;
				height: 32px;
				border-radius: 16px;
				background-color: #fff;
				outline: none;
				margin-top: 19px;
				padding: 0 20px 0 30px;
				background-position: 0 -99px;
			}
			.btn-creator{
				display: block;
				width: 90px;
				height: 32px;
				text-align: center;
				border-radius: 16px;
				margin: 19px 20px 0 20px;
				border:1px solid #4F4F4F;
				color: #ccc;
				transition: all .2s;
				&:hover{
					text-decoration: none;
					color: #fff;
					border: 1px solid #fff;
				}
			}
			.btn-login{
				line-height: 70px;
				transition: all .2s;
				&:hover{
					color: #ccc;
				}
			}
		}
	}
`